const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
    this.read = false;
}

Book.prototype.getTitle = function() {
    return this.title;
}

Book.prototype.getAuthor = function() {
    return this.author;
}

Book.prototype.getPages = function() {
    return this.pages;
}

Book.prototype.getID = function() {
    return this.id;
}

Book.prototype.setRead = function() {
    this.read = (this.read) ? false : true;
}

Book.prototype.getRead = function() {
    return this.read;
}


function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages);
    myLibrary.push(book);
}

function showBooksInLibrary(library) {
    const bookDisplay = document.getElementById("book-display");
    
    library.forEach((book) => {
        const bookElement = document.createElement("div");
        bookElement.textContent = `${book.title}, written by ${book.author}, has ${book.pages} pages, has an id of ${book.id}`;
        bookDisplay.appendChild(bookElement);
    });
}


