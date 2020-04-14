import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class PostServlet extends EntityServlet<Post> {

  public PostServlet() {
    entities = posts;
  }

  protected Post createInstance(HttpServletRequest request) {
    int authorId = Integer.parseInt(request.getParameter("authorId"));
    String content = request.getParameter("content");
    return new Post(authorId, content);
  }

  protected void modifyInstance(HttpServletRequest request, Post post) {
    int authorId = Integer.parseInt(request.getParameter("authorId"));
    if (authorId != 0) {
      post.setAuthorId(authorId);
    }

    String content = request.getParameter("content");
    if (content != null) {
      post.setContent(content);
    }
  }
}

