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
    HttpServletRequest httpRequest = (HttpServletRequest) request;
    System.out.print(String.format("%s: %s", httpRequest.getMethod(), httpRequest.getRequestURL()));

    long startTime =  System.currentTimeMillis();
    chain.doFilter(request, response);
    long endTime = System.currentTimeMillis();

    HttpServletResponse httpResponse = (HttpServletResponse) response;
    System.out.println(String.format(" - %s (%d ms)", httpResponse.getStatus(), endTime - startTime));
  }
}
