public abstract class Entity {
  private int id;

  public Entity() {
    this.id = 0;
  }

  public void setId(int id) {
    if (this.id == 0) {
      this.id = id;
    }
  }

  public int getId() {
    return this.id;
  }

  public abstract String toString();
}

