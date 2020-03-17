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

  window.logic = logic;
})();

