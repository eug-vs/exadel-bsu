// eslint-disable-next-line no-unused-vars
class PostCollection {
  constructor(posts) {
    this._posts = posts;
  }

  _filterPosts(_posts, filterConfig) {
    if (!filterConfig) return this._posts;
    let results = this._posts;
    const { date, authorId, hashTag } = filterConfig;
    if (authorId) results = results.filter(post => post.author.id === authorId);
    if (hashTag) results = results.filter(post => post.hashTags.find(tag => tag === hashTag));
    if (date) {
      if (date.before || date.after) {
        if (date.before) results = results.filter(post => post.createdAt <= date.before);
        if (date.after) results = results.filter(post => post.createdAt >= date.after);
      } else results = results.filter(post => post.createdAt === date);
    }
    return results;
  }

  getPosts(skip = 0, top = 10, filterConfig) {
    const paginated = this._posts.slice(skip, skip + top);
    const sorted = paginated.sort((a, b) => a.createdAt < b.createdAt);
    return this._filterPosts(sorted, filterConfig);
  }

  getPost(id) {
    return this._posts.find(post => post.id === id);
  }

  // eslint-disable-next-line
  _validateUser(user) {
    if (!user) return false;
    if (!user.id || typeof user.id !== 'number') return false;
    if (!user.name || typeof user.name !== 'string') return false;
    if (!user.surname || typeof user.surname !== 'string') return false;
    return true;
  }

  validatePost(post) {
    // Required
    if (!post) return false;
    if (!post.id || typeof post.id !== 'number') return false;
    if (!post.content || typeof post.content !== 'string') return false;
    if (!post.createdAt || typeof post.createdAt !== 'object') return false;
    if (!this._validateUser(post.author)) return false;

    // Optional
    if (post.imageUrl && typeof post.imageUrl !== 'string') return false;
    if (post.hashTags && post.hashTags.some(hashTag => typeof hashTag !== 'string')) return false;
    if (post.likes && !post.likes.every(user => this._validateUser(user))) return false;

    return true;
  }

  addPost(post) {
    if (!this.validatePost(post)) return false;
    this._posts.push(post);
    return this._posts;
  }

  editPost(id, data) {
    const targetPost = this.getPost(id);
    const index = this._posts.findIndex(post => post.id === id);
    const editedPost = { ...targetPost, ...data };
    if (!this.validatePost(editedPost)) return false;
    this._posts[index] = editedPost;
    return editedPost;
  }

  removePost(id) {
    this._posts = this._posts.filter(post => post.id !== id);
    return this._posts;
  }
}

