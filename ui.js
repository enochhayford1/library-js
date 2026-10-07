const bookDisplay = document.getElementById("book-display");
const newBookButton = document.getElementById("newbook");
const form = document.getElementById("form");
const submitBook = document.getElementById("submit-book");
form.style.visibility = "hidden";

function updateBookDisplayStatus(id) {
    const status = document.getElementById(id);


}

newBookButton.addEventListener("click", () => {
    form.style.visibility = "visible";
});

submitBook.addEventListener("click", (event) => {
    const newBookDisplay = document.createElement("span");
    
    const newBook = new Book(title.value, author.value, pages.value);
    const newBookElement = document.createElement("div");
    newBookElement.id = newBook.getID();
    newBookElement.textContent = `${newBook.getTitle()}, written by ${newBook.getAuthor()}, has ${newBook.getPages()} pages, has an id of ${newBook.getID()}, read: ${newBook.getRead()}`;
    
    newBookDisplay.appendChild(newBookElement);

    const removeButton = document.createElement("button");

    removeButton.addEventListener("click", () => {
        removeButton.parentElement.remove();
    });

    removeButton.textContent = "Delete book";
    newBookDisplay.appendChild(removeButton);

    const setReadStatus = document.createElement("button");
    setReadStatus.textContent = "Set as read/unread";
    setReadStatus.addEventListener("click", () => {
        newBook.setRead();
        const info = document.getElementById(newBook.getID());
        info.textContent = `${newBook.getTitle()}, written by ${newBook.getAuthor()}, has ${newBook.getPages()} pages, has an id of ${newBook.getID()}, read: ${newBook.getRead()}`;
    });
    newBookDisplay.appendChild(setReadStatus);
    
    
    bookDisplay.appendChild(newBookDisplay);


    form.style.visibility = "hidden";

})