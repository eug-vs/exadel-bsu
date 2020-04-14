import javax.servlet.http.HttpServlet;

public abstract class GlobalServlet extends HttpServlet {
  public static Service<User> users;
  public static Service<Post> posts;

  public GlobalServlet() {
    users = new Service<User>();
    posts = new Service<Post>();

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
