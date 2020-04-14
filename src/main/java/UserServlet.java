import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class UserServlet extends EntityServlet<User> {

  public UserServlet() {
    entities = users;
  }

  protected User createInstance(HttpServletRequest request) {
    String name = request.getParameter("name");
    String surname = request.getParameter("surname");
    return new User(name, surname);
  }

  protected void modifyInstance(HttpServletRequest request, User user) {
    String name = request.getParameter("name");
    if (name != null) {
      user.setName(name);
    }

    String surname = request.getParameter("surname");
    if (surname != null) {
      user.setSurname(surname);
    }
  }
}

