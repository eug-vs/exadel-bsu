import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LogFilter implements Filter {
  @Override
  public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
    long startTime =  System.currentTimeMillis();
    chain.doFilter(request, response);
    long endTime = System.currentTimeMillis();

    HttpServletRequest httpRequest = (HttpServletRequest) request;
    HttpServletResponse httpResponse = (HttpServletResponse) response;
    System.out.println(String.format(
        "%s: %s - %s (%d ms)",
        httpRequest.getMethod(),
        httpRequest.getRequestURL(),
        httpResponse.getStatus(),
        endTime - startTime
    ));
  }
}
