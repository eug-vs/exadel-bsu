import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class PostServlet extends GlobalServlet {
  @Override
  protected void doPost(HttpServletRequest request, HttpServletResponse response) {
    String content = request.getParameter("content");
    int authorId = Integer.parseInt(request.getParameter("authorId"));
    Post post = new Post(authorId, content);
    posts.register(post);

    response.setStatus(HttpServletResponse.SC_CREATED);
    returnInstance(response, post);
  }

  @Override
  protected void doGet(HttpServletRequest request, HttpServletResponse response) {
    int id = parseId(request);

    if (id == 0) {
      returnMultiple(response, users.getObjects());
    } else if (id == -1) {
      response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
    } else {
      Post post = posts.get(id);
      if (post != null) returnInstance(response, post);
      else response.setStatus(HttpServletResponse.SC_NOT_FOUND);
    }
  }

  @Override
  protected void doPut(HttpServletRequest request, HttpServletResponse response) {
    int id = parseId(request);

    if (id == 0 || id == -1) {
      response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
    } else {
      Post post = posts.get(id);
      if (post == null) response.setStatus(HttpServletResponse.SC_NOT_FOUND);
      else {
        String content = request.getParameter("content");
        if (content != null) {
          post.setContent(content);
        }

        int authorId = Integer.parseInt(request.getParameter("authorId"));
        if (authorId != 0) {
          post.setAuthorId(authorId);
        }

        returnInstance(response, post);
      }
    }
  }

  @Override
  protected void doDelete(HttpServletRequest request, HttpServletResponse response) {
    int id = parseId(request);

    if (id == 0 || id == -1) {
      response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
    } else {
      posts.delete(id);
      response.setStatus(HttpServletResponse.SC_NO_CONTENT);
    }
  }
}

