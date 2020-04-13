import java.util.ArrayList;

public class Manager<T extends Entity> {
  private ArrayList<T> objects;
  private int nextId;

  public Manager() {
    objects = new ArrayList<T>();
    nextId = 1;
  }

  public void register(T object) {
    object.setId(nextId);
    objects.add(object);
    nextId += 1;
  }

  public T get(int id) {
    for (T object : objects) {
      if (object.getId() == id) {
        return object;
      }
    }
    return null;
  }

  public ArrayList<T> getObjects() {
    return this.objects;
  }

  public void delete(int id) {
    for (int i = 0; i < objects.size(); i++) {
      if (objects.get(i).getId() == id) objects.remove(i);
    }
  }
}

