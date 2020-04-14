import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class UserServlet extends GlobalServlet {
  @Override
  protected void doPost(HttpServletRequest request, HttpServletResponse response) {
    String name = request.getParameter("name");
    String surname = request.getParameter("surname");
    User user = new User(name, surname);
    users.register(user);

    response.setStatus(HttpServletResponse.SC_CREATED);
    returnInstance(response, user);
  }

  @Override
  protected void doGet(HttpServletRequest request, HttpServletResponse response) {
    int id = parseId(request);

    if (id == 0) {
      returnMultiple(response, users.getObjects());
    } else if (id == -1) {
      response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
    } else {
      User user = users.get(id);
      if (user != null) returnInstance(response, user);
      else response.setStatus(HttpServletResponse.SC_NOT_FOUND);
    }
  }

  @Override
  protected void doPut(HttpServletRequest request, HttpServletResponse response) {
    int id = parseId(request);

    if (id == 0 || id == -1) {
      response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
    } else {
      User user = users.get(id);
      if (user == null) response.setStatus(HttpServletResponse.SC_NOT_FOUND);
      else {
        String name = request.getParameter("name");
        if (name != null) {
          user.setName(name);
        }

        String surname = request.getParameter("surname");
        if (surname != null) {
          user.setSurname(surname);
        }

        returnInstance(response, user);
      }
    }
  }

  @Override
  protected void doDelete(HttpServletRequest request, HttpServletResponse response) {
    int id = parseId(request);

    if (id == 0 || id == -1) {
      response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
    } else {
      users.delete(id);
      response.setStatus(HttpServletResponse.SC_NO_CONTENT);
    }
  }
}

