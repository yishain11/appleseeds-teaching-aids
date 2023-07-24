const firstBook = {
  name: 'foundation',
  author: 'Isaac Asimov',
  year: 1951,
  genre: 'science fintion',
};

const getBookDescription = (book) => {
  return `The book ${book.name} was written by ${book.author} in the year ${book.year}`;
};

console.log(getBookDescription(firstBook));
