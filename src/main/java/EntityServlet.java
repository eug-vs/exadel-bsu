import java.util.ArrayList;
import java.io.IOException;
import java.lang.NumberFormatException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

public abstract class EntityServlet<T extends Entity> extends GlobalServlet {

  public Service<T> service;

  protected abstract T createInstance(HttpServletRequest request);

  protected abstract void modifyInstance(HttpServletRequest request, T instance);

  private void returnInstance(HttpServletResponse response, T instance) {
    try {
      JSONObject json = new JSONObject(instance);
      response.setContentType("application/json");
      response.getOutputStream().println(json.toString());
    } catch (IOException e) {
      response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
    }
  }

  private void returnMultiple(HttpServletResponse response, ArrayList<T> instances) {
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

  private int parseId(HttpServletRequest request) {
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

  @Override
  protected void doGet(HttpServletRequest request, HttpServletResponse response) {
    int id = parseId(request);

    if (id == 0) {
      returnMultiple(response, service.getObjects());
    } else if (id == -1) {
      response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
    } else {
      T instance = service.get(id);
      if (instance != null) returnInstance(response, instance);
      else response.setStatus(HttpServletResponse.SC_NOT_FOUND);
    }
  }

  @Override
  protected void doPost(HttpServletRequest request, HttpServletResponse response) {
    T instance = createInstance(request);
    service.register(instance);

    response.setStatus(HttpServletResponse.SC_CREATED);
    returnInstance(response, instance);
  }

  @Override
  protected void doPut(HttpServletRequest request, HttpServletResponse response) {
    int id = parseId(request);

    if (id == 0 || id == -1) {
      response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
    } else {
      T instance = service.get(id);
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
      service.delete(id);
      response.setStatus(HttpServletResponse.SC_NO_CONTENT);
    }
  }
}

