/* eslint-disable */
(() => {
  const test = {};

  const logicLoaded = () => {
    try {
      if (logic) return true;
    } catch (e) {
      console.error('Logic module is not loaded!');
    }
    return false;
  };

  const logFunctionCall = (func, params, name = '') => {
    let result;
    if (params.length) result = func(...params);
    else result = func(params);

    if (typeof params === 'object') {
      console.log(`${name}(${JSON.stringify(params).slice(1, -1)})`);
    } else {
      console.log(`${name}(${params})`);
    }
    console.log(result);
  };

  const referenceDate = new Date('2020-02-15T23:00:00');

  const testData = {
    getPosts: [
      [],
      [0, 5],
      [5, 3],
      [0, 10, { authorId: 2 }],
      [0, 10, { date: { before: referenceDate } }],
      [0, 10, { date: { after: referenceDate } }],
      [0, 10, { date: { after: referenceDate }, authorId: 1 }],
      [0, 10, { hashTag: 'cool' }],
    ],

    getPost: [1, 2, 15],

    addPost: [
      {
        id: 100,
        content: 'This post was created by addPost() function.',
        author: {
          id: 2,
          name: 'John',
          surname: 'Doe',
        },
        createdAt: referenceDate,
      },
    ],

    editPost: [
      [1, { content: 'This post was edited with editPost() function.' }],
      [7, { content: 'This post was edited with editPost() function.', createdAt: new Date() }],
    ],

    removePost: [1, 2, 10],

    validatePost: [
      {
        id: 300,
        content: 'This is the valid post example.',
        author: {
          id: 2,
          name: 'John',
          surname: 'Doe',
        },
        createdAt: referenceDate,
      },
      {
        id: 300,
        content: 'This post is invalid since it has no createdAt field.',
        author: {
          id: 2,
          name: 'John',
          surname: 'Doe',
        },
      },
    ],
  };

  // Generate test functions and assign them to test module object
  Object.keys(testData).forEach(functionName => {
    test[functionName] = () => {
      if (!logicLoaded()) return false;
      testData[functionName].forEach(params => logFunctionCall(logic[functionName], params, functionName));
    };
  });

  window.test = test;
})();
