import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public abstract class EntityServlet<T extends Entity> extends GlobalServlet {
  public Service<T> entities;

  protected abstract T createInstance(HttpServletRequest request);

  protected abstract void modifyInstance(HttpServletRequest request, T instance);

  @Override
  protected void doGet(HttpServletRequest request, HttpServletResponse response) {
    int id = parseId(request);

    if (id == 0) {
      returnMultiple(response, users.getObjects());
    } else if (id == -1) {
      response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
    } else {
      T instance = entities.get(id);
      if (instance != null) returnInstance(response, instance);
      else response.setStatus(HttpServletResponse.SC_NOT_FOUND);
    }
  }

  @Override
  protected void doPost(HttpServletRequest request, HttpServletResponse response) {
    T instance = createInstance(request);
    entities.register(instance);

    response.setStatus(HttpServletResponse.SC_CREATED);
    returnInstance(response, instance);
  }

  @Override
  protected void doPut(HttpServletRequest request, HttpServletResponse response) {
    int id = parseId(request);

    if (id == 0 || id == -1) {
      response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
    } else {
      T instance = entities.get(id);
      if (instance == null) response.setStatus(HttpServletResponse.SC_NOT_FOUND);
      else {
        modifyInstance(request, instance);
        returnInstance(response, instance);
      }
    }
  }

  @Override
  protected void doDelete(HttpServletRequest request, HttpServletResponse response) {
    int id = parseId(request);

    if (id == 0 || id == -1) {
      response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
    } else {
      entities.delete(id);
      response.setStatus(HttpServletResponse.SC_NO_CONTENT);
    }
  }
}

