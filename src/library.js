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
  var shelf = library.shelves[genre];
  
  if (searchShelf(shelf, bookTitle)){
    unshelfBook(bookTitle, shelf)
    return `You have now checked out ${bookTitle} from the Denver Public Library.`
  } else {
    return `Sorry, there are currently no copies of ${bookTitle} available at the Denver Public Library.`;
  }

};

function takeStock(library, genre) {
  var libraryName = library.name;
  if (genre === undefined) {
    var shelfCount = library.shelves.fantasy.length + library.shelves.fiction.length + library.shelves.nonFiction.length
    return `There are a total of ${shelfCount} books at the ${libraryName}.`
  } else {
    var shelfCount = library.shelves[genre].length;
    return `There are a total of ${shelfCount} ${genre} books at the ${libraryName}.`
  }
  
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};