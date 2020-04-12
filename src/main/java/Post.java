import java.util.Date;

public class Post extends Entity {
  public String content;
  public String imageUrl;
  public Date createdAt;
  public User author;
}
