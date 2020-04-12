public class Post extends Entity {
  private String content;
  private int authorId;

  public Post(int authordId, String content) {
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

  public String toString() {
    return content.substring(0, 10) + "... (Post #" + getId() + " from " + getCreatedAt() + ")";
  }
}

