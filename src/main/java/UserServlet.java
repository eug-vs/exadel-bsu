import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class UserServlet extends GlobalServlet {
  @Override
  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String name = request.getParameter("name");
    String surname = request.getParameter("surname");
    User user = new User(name, surname);
    users.register(user);
    response.setStatus(HttpServletResponse.SC_CREATED);
  }

  @Override
  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    int id = Integer.parseInt(request.getParameter("id"));
    User user = users.get(id);
    if (user != null) {
      response.setContentType("application/json");
      response.getOutputStream().println(user.toString());
    } else response.setStatus(HttpServletResponse.SC_NOT_FOUND);
  }

  @Override
  protected void doPut(HttpServletRequest request, HttpServletResponse response) throws IOException {
    int id = Integer.parseInt(request.getParameter("id"));
    User user = users.get(id);

    String name = request.getParameter("name");
    if (name != null) {
      user.setName(name);
    }

    String surname = request.getParameter("surname");
    if (surname != null) {
      user.setSurname(surname);
    }
  }

  @Override
  protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws IOException {
    int id = Integer.parseInt(request.getParameter("id"));
    users.delete(id);
  }
}

