public class Post extends Entity {
  private String content;
  private int authorId;

  public Post(int authorId, String content) {
    super();
    this.authorId = authorId;
    this.content = content;
  }

  public void setAuthorId(int authorId) {
    this.authorId = authorId;
  }

  public int getAuthorId() {
    return authorId;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public String getContent() {
    return content;
  }
}

