function createTitle(bookTitle) {
  return `The ${bookTitle}`;
};

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  };
  
  return character;
};

function saveReview(newReview, reviews) {
  if (reviews.includes(newReview)) {
    return reviews;
  }

  return reviews.push(newReview);
};

function calculatePageCount(bookTitle) {
  var pageCount = bookTitle.length * 20;
  
  return pageCount;
};

function writeBook(bookTitle, bookCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  };

  return book;
};

function editBook(book) {
  var editedBook = book;

  editedBook.pageCount = book.pageCount * .75;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}