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
    return posts.filter(post => post.id == id);
  }

  logic.validatePost = post => {
    if (!post) return false;
    if (!post.id || typeof post.id !== 'number') return false;
    if (!post.content || typeof post.content !== 'string') return false;
    if (!post.createdAt || typeof post.createdAt !== 'object') return false;
    if (post.imageUrl && typeof post.imageUrl !== 'string') return false;

    if (!post.author) return false;
    if (!post.author.id || typeof post.author.id !== 'number') return false;
    if (!post.author.name || typeof post.author.name !== 'string') return false;
    if (!post.author.surname || typeof post.author.surname !== 'string') return false;

    return true;
  }

  logic.addPost = post => {
    if (!validatePost(post)) return false;
    return posts.push(post);
  }

  logic.removePost = id => {
    return posts = posts.filter(post => post.id !== id);
  }

  window.logic = logic;
})();

