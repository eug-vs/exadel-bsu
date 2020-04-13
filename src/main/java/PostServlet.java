import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class PostServlet extends GlobalServlet {
  @Override
  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String content = request.getParameter("content");
    int authorId = Integer.parseInt(request.getParameter("authorId"));
    Post post = new Post(authorId, content);
    posts.register(post);
    response.setStatus(HttpServletResponse.SC_CREATED);
  }

  @Override
  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    int id = Integer.parseInt(request.getParameter("id"));
    Post post = posts.get(id);
    if (post != null) {
      response.setContentType("application/json");
      response.getOutputStream().println(post.toString());
    } else response.setStatus(HttpServletResponse.SC_NOT_FOUND);
  }

  @Override
  protected void doPut(HttpServletRequest request, HttpServletResponse response) throws IOException {
    int id = Integer.parseInt(request.getParameter("id"));
    Post post = posts.get(id);

    int authorId = Integer.parseInt(request.getParameter("authorId"));
    if (authorId > 0) {
      post.setAuthorId(authorId);
    }

    String content = request.getParameter("content");
    if (content != null) {
      post.setContent(content);
    }
  }

  @Override
  protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws IOException {
    int id = Integer.parseInt(request.getParameter("id"));
    posts.delete(id);
  }
}

