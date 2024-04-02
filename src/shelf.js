function shelfBook(book, shelf) {
  if (shelf.length >= 3) {
    return;
  }

  shelf.unshift(book);
};

function unshelfBook(titleToRemove, shelf) {
  const index = shelf.findIndex(book => book.title === titleToRemove);
  shelf.splice(index, 1);
};

function listTitles(shelf) {
  return shelf.map(book => book.title).join(', ');
};

function searchShelf(shelf, bookTitle) {
  if (shelf.find(book => book.title === bookTitle)) {
    return true;
  };

  return false;
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};