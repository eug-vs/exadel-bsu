const posts = [
  {
    id: 1,
    content: "In id erat non orci commodo lobortis.",
    imageUrl: "https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg",
    author: {
      id: 1,
      name: "Eugene",
      surname: "Sokolov"
    },
    createdAt: new Date("2020-03-17T23:00:00")
  },
  {
    id: 2,
    content: "Vestibulum convallis, lorem a tempus semper, dui dui euismod elit, vitae placerat urna tortor vitae lacus.",
    author: {
      id: 1,
      name: "Eugene",
      surname: "Sokolov"
    },
    createdAt: new Date("2020-03-17T23:00:00")
  },
  {
    id: 3,
    content: "Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.",
    author: {
      id: 1,
      name: "Eugene",
      surname: "Sokolov"
    },
    createdAt: new Date("2020-03-17T23:00:00")
  },
  {
    id: 4,
    content: "Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.",
    author: {
      id: 1,
      name: "Eugene",
      surname: "Sokolov"
    },
    createdAt: new Date("2020-03-17T23:00:00")
  },
  {
    id: 5,
    content: "Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.",
    author: {
      id: 1,
      name: "Eugene",
      surname: "Sokolov"
    },
    createdAt: new Date("2020-03-17T23:00:00")
  },
  {
    id: 6,
    content: "Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.",
    author: {
      id: 1,
      name: "Eugene",
      surname: "Sokolov"
    },
    createdAt: new Date("2020-03-17T23:00:00")
  },
  {
    id: 7,
    content: "Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.",
    author: {
      id: 1,
      name: "Eugene",
      surname: "Sokolov"
    },
    createdAt: new Date("2020-03-17T23:00:00")
  },
  {
    id: 8,
    content: "Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.",
    author: {
      id: 1,
      name: "Eugene",
      surname: "Sokolov"
    },
    createdAt: new Date("2020-03-17T23:00:00")
  },
  {
    id: 9,
    content: "Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.",
    author: {
      id: 1,
      name: "Eugene",
      surname: "Sokolov"
    },
    createdAt: new Date("2020-03-17T23:00:00")
  },
  {
    id: 10,
    content: "Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.",
    author: {
      id: 1,
      name: "Eugene",
      surname: "Sokolov"
    },
    createdAt: new Date("2020-03-17T23:00:00")
  },
];

