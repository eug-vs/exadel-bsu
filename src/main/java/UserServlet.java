import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class UserServlet extends HttpServlet {
  private static Manager<User> users;

  public UserServlet() {
    super();
    users = new Manager<User>();
    createTestUsers();
  }

  private void createTestUsers() {
    users.create(new User("Eugene", "Sokolov"));
    users.create(new User("John", "Doe"));
  }

  @Override
  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    int id = Integer.parseInt(request.getParameter("id"));
    User user = users.get(id);
    if (user != null) {
      response.getOutputStream().println(user.toString());
    } else response.setStatus(HttpServletResponse.SC_NOT_FOUND);
  }

  @Override
  protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws IOException {
    int id = Integer.parseInt(request.getParameter("id"));
    users.delete(id);
  }
}
