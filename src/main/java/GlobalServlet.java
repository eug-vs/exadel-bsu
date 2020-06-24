import javax.servlet.http.HttpServlet;

public abstract class GlobalServlet extends HttpServlet {
  public static Service<User> userService;
  public static Service<Post> postService;

  public GlobalServlet() {
    userService = new Service<User>();
    postService = new Service<Post>();

    createTestUsers();
    createTestPosts();
  }

  private void createTestUsers() {
    userService.register(new User("Eugene", "Sokolov"));
    userService.register(new User("John", "Doe"));
  }

  private void createTestPosts() {
    postService.register(new Post(2, "Hello, world!"));
  }

}
