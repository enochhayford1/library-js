const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages);
    myLibrary.push(book);
}

function showBooksInLibrary(library) {
    library.forEach((book) => {
        console.log(`${book.title}, written by ${book.author}, has ${book.pages} pages, has an id of ${book.id}`)
    });
}
