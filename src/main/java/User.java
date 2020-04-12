public class User extends Entity {
  private String name;
  private String surname;

  public User(String name, String surname) {
    super();
    this.name = name;
    this.surname = surname;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getSurname() {
    return name;
  }

  public void setSurname(String surname) {
    this.surname = surname;
  }

  public String toString() {
    return name + " " + surname + " (User #" + getId() + ")";
  }
}

