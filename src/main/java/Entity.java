import java.util.Date;
import org.json.JSONObject;

public abstract class Entity {
  private int id;
  private Date createdAt;

  public Entity() {
    id = 0;
    createdAt = new Date();
  }

  public void setId(int id) {
    if (this.id == 0) {
      this.id = id;
    }
  }

  public int getId() {
    return id;
  }

  public Date getCreatedAt() {
    return createdAt;
  }

  public String toString() {
    JSONObject json = new JSONObject(this);
    return json.toString();
  }
}

