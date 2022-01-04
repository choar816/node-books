let books = [
  {
    id: 1,
    title: '1984',
    author: 'George Orwell',
    content:
      'Winston Smith is a low-ranking member of the ruling Party in London, in the nation of Oceania. Everywhere Winston goes, even his own home, ...',
    section: 'SF',
    star: 4,
    review: 'Great',
    reviewDate: new Date().toString(),
  },
  {
    id: 2,
    title: 'Brave New World',
    author: 'Aldous Huxley',
    content:
      'Far in the future, the World Controllers have created the ideal society. Through the clever mix of genetic engineering, brainwashing and ...',
    section: 'SF',
    star: 5,
    review: 'My favorite book',
    reviewDate: new Date().toString(),
  },
  {
    id: 3,
    title: 'Essays in Love',
    author: 'Alain de Botton',
    content:
      'Essays in Love is a novel about two young people, who meet on an airplane between London and Paris and rapidly fall in love.',
    section: 'Novel',
    star: 4,
    review: 'Interesting',
    reviewDate: new Date().toString(),
  },
];

module.exports = books;
