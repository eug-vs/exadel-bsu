;(() => {
  const logic = {};

  const postsLoaded = () => {
    try {
      if (posts) return true;
    } catch (e) {
      console.error("Posts data is not loaded!")
    }
    return false;
  }

  logic.getPosts = () =>  {
    if (!postsLoaded()) return [];
    return posts;
  }

  window.logic = logic;
})();

