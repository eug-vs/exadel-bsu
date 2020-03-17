;(() => {
  const logic = {};

  const postsLoaded = () => {
    try {
      if (posts) return true;
    } catch (e) {
      console.error('Posts data is not loaded!');
    }
    return false;
  }

  const filterPosts = (posts, filterConfig) => {
    if (!filterConfig) return posts;
    let results = posts;
    const { date, authorId } = filterConfig;
    if (authorId) results = results.filter(post => post.author.id === authorId);
    if (date) {
      if (date.before || date.after) {
        if (date.before) results = results.filter(post => post.createdAt >= date.before);
        if (date.after) results = results.filter(post => post.createdAt <= date.after);
      } else results = results.filter(post.createdAt === date);
    }
    return results;
  }

  logic.getPosts = (skip = 0, top = 10, filterConfig) => {
    if (!postsLoaded()) return [];
    const paginated = posts.slice(skip, skip + top);
    const sorted = paginated.sort((a, b) => a.createdAt < b.createdAt);
    return filterPosts(sorted, filterConfig);
  }

  logic.getPost = id => {
    if(!postsLoaded()) return [];
    return posts.find(post => post.id == id);
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
      !post.hashTags.reduce(
        (isValid, current) => isValid? typeof current == 'string' : false,
        true
      )
    ) return false;

    if (
      post.likes &&
      !post.likes.reduce(
        (isValid, current) => isValid? validateUser(current) : false,
        true
      )
    ) return false;

    return true;
  }

  logic.addPost = post => {
    if (!validatePost(post) || !postsLoaded()) return false;
    return posts.push(post);
  }

  logic.removePost = id => {
    if(!postsLoaded()) return false;
    return posts = posts.filter(post => post.id !== id);
  }

  window.logic = logic;
})();

