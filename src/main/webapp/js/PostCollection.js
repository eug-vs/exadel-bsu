// eslint-disable-next-line no-unused-vars
class PostCollection {
  constructor(posts) {
    this._posts = [];
    this.addMultiple(posts);
  }

  _filter(_posts, filterConfig) {
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

  getPage(skip = 0, top = 10, filterConfig) {
    const paginated = this._posts.slice(skip, skip + top);
    const sorted = paginated.sort((a, b) => a.createdAt < b.createdAt);
    return this._filter(sorted, filterConfig);
  }

  get(id) {
    return this._posts.find(post => post.id === id);
  }

  static _validateUser(user) {
    if (!user) return false;
    if (!user.id || typeof user.id !== 'number') return false;
    if (!user.name || typeof user.name !== 'string') return false;
    if (!user.surname || typeof user.surname !== 'string') return false;
    return true;
  }

  static validate(post) {
    // Required
    if (!post) return false;
    if (!post.id || typeof post.id !== 'number') return false;
    if (!post.content || typeof post.content !== 'string') return false;
    if (!post.createdAt || typeof post.createdAt !== 'object') return false;
    if (!PostCollection._validateUser(post.author)) return false;

    // Optional
    if (post.imageUrl && typeof post.imageUrl !== 'string') return false;
    if (post.hashTags && post.hashTags.some(hashTag => typeof hashTag !== 'string')) return false;
    if (post.likes && !post.likes.every(user => PostCollection._validateUser(user))) return false;

    return true;
  }

  add(post) {
    if (!PostCollection.validate(post)) return false;
    this._posts.push(post);
    return this._posts;
  }

  addMultiple(posts) {
    return posts.reduce((invalidPosts, currentPost) => {
      const success = this.add(currentPost);
      if (!success) invalidPosts.push(currentPost);
      return invalidPosts;
    }, []);
  }

  edit(id, data) {
    const targetPost = this.get(id);
    const index = this._posts.findIndex(post => post.id === id);
    const editedPost = { ...targetPost, ...data };
    if (!PostCollection.validate(editedPost)) return false;
    this._posts[index] = editedPost;
    return editedPost;
  }

  remove(id) {
    this._posts = this._posts.filter(post => post.id !== id);
    return this._posts;
  }

  clear() {
    this._posts = [];
  }
}

