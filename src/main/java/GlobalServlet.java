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
    users.register(new User("Eugene", "Sokolov"));
    users.register(new User("John", "Doe"));
  }

  private void createTestPosts() {
    posts.register(new Post(2, "Hello, world!"));
  }
}
