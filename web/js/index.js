;(() => {
  const logic = {};

  let _posts = posts? posts : [];

  const filterPosts = (posts, filterConfig) => {
    if (!filterConfig) return posts;
    let results = posts;
    const { date, authorId, hashTag } = filterConfig;
    if (authorId) results = results.filter(post => post.author.id === authorId);
    if (hashTag) results = results.filter(post => post.hashTags.find(tag => tag === hashTag));
    if (date) {
      if (date.before || date.after) {
        if (date.before) results = results.filter(post => post.createdAt <= date.before);
        if (date.after) results = results.filter(post => post.createdAt >= date.after);
      } else results = results.filter(post.createdAt === date);
    }
    return results;
  }

  logic.getPosts = (skip = 0, top = 10, filterConfig) => {
    const paginated = _posts.slice(skip, skip + top);
    const sorted = paginated.sort((a, b) => a.createdAt < b.createdAt);
    return filterPosts(sorted, filterConfig);
  }

  logic.getPost = id => {
    return _posts.find(post => post.id === id);
  }

  const validateUser = user => {
    if (!user) return false;
    if (!user.id || typeof user.id !== 'number') return false;
    if (!user.name || typeof user.name !== 'string') return false;
    if (!user.surname || typeof user.surname !== 'string') return false;

    return true;
  }

  logic.validatePost = post => {
    // Required
    if (!post) return false;
    if (!post.id || typeof post.id !== 'number') return false;
    if (!post.content || typeof post.content !== 'string') return false;
    if (!post.createdAt || typeof post.createdAt !== 'object') return false;
    if (!validateUser(post.author)) return false;

    // Optional
    if (post.imageUrl && typeof post.imageUrl !== 'string') return false;

    if (
      post.hashTags &&
      post.hashTags.some(hashTag => typeof hashTag !== 'string')
    ) return false;

    if (
      post.likes &&
      !post.likes.every(user => validateUser(user))
    ) return false;

    return true;
  }

  logic.addPost = post => {
    if (!logic.validatePost(post)) return false;
    _posts.push(post);
    return _posts;
  }

  logic.editPost = (id, data) => {
    const post = logic.getPost(id);
    const index = _posts.findIndex(post => post.id === id);
    const editedPost = { ...post, ...data };
    if (!logic.validatePost(editedPost)) return false;
    return _posts[index] = editedPost;
  }

  logic.removePost = id => {
    return _posts = _posts.filter(post => post.id !== id);
  }

  window.logic = logic;
})();

