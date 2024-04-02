const { unshelfBook, shelfBook, searchShelf } = require('./shelf')

function createLibrary(libraryName) {
  library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };

  return library;
};

function addBook(library, book) {
  shelfBook(book, library.shelves[book.genre]);
};

function checkoutBook(library, bookTitle, genre) {
  const shelf = library.shelves[genre];
  
  if (searchShelf(shelf, bookTitle)){
    unshelfBook(bookTitle, shelf)
    return `You have now checked out ${bookTitle} from the Denver Public Library.`
  } else {
    return `Sorry, there are currently no copies of ${bookTitle} available at the Denver Public Library.`;
  }
};

function takeStock(library, genre = 'all') {
  const libraryName = library.name;
  let shelfCount;
  let genreLabel = 'books';

  if (genre === 'all') {
    shelfCount = Object.values(library.shelves).reduce((acc, shelf) => acc + shelf.length, 0);
  } else if (library.shelves[genre]) {
    shelfCount = library.shelves[genre].length;
    genreLabel = `${genre} books`;
  }
  return `There are a total of ${shelfCount} ${genreLabel} at the ${libraryName}.`;
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};