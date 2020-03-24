// eslint-disable-next-line no-unused-vars
const initialPosts = [
  {
    id: 1,
    content: 'In id erat non orci commodo lobortis.',
    imageUrl: 'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
    author: {
      id: 1,
      name: 'Eugene',
      surname: 'Sokolov',
    },
    createdAt: new Date('2020-03-17T23:00:00'),
    likes: [],
    hashTags: [
      'doggo',
      'cool',
    ],
  },
  {
    id: 2,
    content: 'Vestibulum convallis, lorem a tempus semper, dui dui euismod elit, vitae placerat urna tortor vitae lacus.',
    author: {
      id: 2,
      name: 'John',
      surname: 'Doe',
    },
    createdAt: new Date('2020-03-17T23:00:00'),
    likes: [
      {
        id: 1,
        name: 'Eugene',
        surname: 'Sokolov',
      },
    ],
    hashTags: [],
  },
  {
    id: 3,
    content: 'Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.',
    author: {
      id: 1,
      name: 'Eugene',
      surname: 'Sokolov',
    },
    createdAt: new Date('2020-02-17T23:00:00'),
    likes: [],
    hashTags: [],
  },
  {
    id: 4,
    content: 'Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.',
    author: {
      id: 1,
      name: 'Eugene',
      surname: 'Sokolov',
    },
    createdAt: new Date('2020-03-12T23:00:00'),
    likes: [],
    hashTags: [],
  },
  {
    id: 5,
    content: 'Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.',
    author: {
      id: 1,
      name: 'Eugene',
      surname: 'Sokolov',
    },
    createdAt: new Date('2020-01-20T23:00:00'),
    likes: [],
    hashTags: [],
  },
  {
    id: 6,
    content: 'Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.',
    author: {
      id: 2,
      name: 'John',
      surname: 'Doe',
    },
    createdAt: new Date('2020-03-17T23:00:00'),
    likes: [],
    hashTags: [],
  },
  {
    id: 7,
    content: 'Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.',
    author: {
      id: 2,
      name: 'John',
      surname: 'Doe',
    },
    createdAt: new Date('2020-03-17T23:00:00'),
    likes: [],
    hashTags: [],
  },
  {
    id: 8,
    content: 'Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.',
    author: {
      id: 1,
      name: 'Eugene',
      surname: 'Sokolov',
    },
    createdAt: new Date('2020-03-17T23:00:00'),
    likes: [],
    hashTags: [],
  },
  {
    id: 9,
    content: 'Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.',
    author: {
      id: 1,
      name: 'Eugene',
      surname: 'Sokolov',
    },
    createdAt: new Date('2020-03-17T23:00:00'),
    likes: [],
    hashTags: [],
  },
  {
    id: 10,
    content: 'Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.',
    author: {
      id: 1,
      name: 'Eugene',
      surname: 'Sokolov',
    },
    createdAt: new Date('2020-03-17T23:00:00'),
    likes: [],
    hashTags: [],
  },
];
