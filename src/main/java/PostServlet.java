import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class PostServlet extends GlobalServlet {
  @Override
  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    int id = Integer.parseInt(request.getParameter("id"));
    Post post = posts.get(id);
    if (post != null) {
      response.getOutputStream().println(post.toString());
    } else response.setStatus(HttpServletResponse.SC_NOT_FOUND);
  }

  @Override
  protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws IOException {
    int id = Integer.parseInt(request.getParameter("id"));
    posts.delete(id);
  }
}

