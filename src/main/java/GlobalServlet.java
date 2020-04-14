import java.util.ArrayList;
import java.io.IOException;
import java.lang.NumberFormatException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.json.JSONArray;
import org.json.JSONObject;

public abstract class GlobalServlet extends HttpServlet {
  public static Service<User> users;
  public static Service<Post> posts;

  public GlobalServlet() {
    users = new Service<User>();
    posts = new Service<Post>();

    createTestUsers();
    createTestPosts();
  }

  private void createTestUsers() {
    users.register(new User("Eugene", "Sokolov"));
    users.register(new User("John", "Doe"));
  }

  private void createTestPosts() {
    posts.register(new Post(2, "Hello, world!"));
  }

  protected <T extends Entity> void returnInstance(HttpServletResponse response, T instance) {
    try {
      JSONObject json = new JSONObject(instance);
      response.setContentType("application/json");
      response.getOutputStream().println(json.toString());
    } catch (IOException e) {
      response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
    }
  }

  protected <T extends Entity> void returnMultiple(HttpServletResponse response, ArrayList<T> instances) {
    try {
      JSONArray json = new JSONArray();
      for (T instance : instances) {
        JSONObject instanceJson = new JSONObject(instance);
        json.put(instanceJson);
      }
      response.setContentType("application/json");
      response.getOutputStream().println(json.toString());
    } catch (IOException e) {
      response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
    }
  }

  protected int parseId(HttpServletRequest request) {
    String id = null;
    String endpoint = request.getPathInfo();

    if (endpoint == null) {
      id = request.getParameter("id");
    } else if (endpoint.matches("/\\d+")) {
      id = endpoint.substring(1);
    }

    if (id == null) return 0;

    try {
      return Integer.parseInt(id);
    } catch (NumberFormatException e) {
      return -1;
    }
  }
}
