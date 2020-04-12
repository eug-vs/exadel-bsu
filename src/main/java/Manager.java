import java.util.ArrayList;

public class Manager<T extends Entity> {
  private ArrayList<T> objects;
  private int nextId;

  public Manager() {
    objects = new ArrayList<T>();
    nextId = 0;
  }

  public void register(T object) {
    object.setId(nextId);
    nextId += 1;
  }
}

