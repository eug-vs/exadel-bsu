import java.util.Date;

public abstract class Entity {
  private int id;
  private Date createdAt;

  public Entity() {
    this.id = 0;
    this.createdAt = new Date();
  }

  public void setId(int id) {
    if (this.id == 0) {
      this.id = id;
    }
  }

  public int getId() {
    return this.id;
  }

  public Date getCreatedAt() {
    return this.createdAt;
  }

  public abstract String toString();
}

