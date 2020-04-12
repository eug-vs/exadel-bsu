import javax.servlet.http.HttpServlet;

public abstract class GlobalServlet extends HttpServlet {
  public static Manager<User> users;
  public static Manager<Post> posts;

  public GlobalServlet() {
    users = new Manager<User>();
    posts = new Manager<Post>();

    createTestUsers();
    createTestPosts();
  }

  private void createTestUsers() {
    users.create(new User("Eugene", "Sokolov"));
    users.create(new User("John", "Doe"));
  }

  private void createTestPosts() {
    posts.create(new Post(2, "Hello, world!"));
  }
}
