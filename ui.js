const bookDisplay = document.getElementById("book-display");
const newBookButton = document.getElementById("newbook");
const form = document.getElementById("form");
const submitBook = document.getElementById("submit-book");
form.style.visibility = "hidden";

newBookButton.addEventListener("click", () => {
    form.style.visibility = "visible";
});

submitBook.addEventListener("click", (event) => {
    const newBook = new Book(title.value, author.value, pages.value);
    const newBookElement = document.createElement("div");
    newBookElement.textContent = `${newBook.getTitle()}, written by ${newBook.getAuthor()}, has ${newBook.getPages()} pages, has an id of ${newBook.getID()}`;
    bookDisplay.appendChild(newBookElement);

    form.style.visibility = "hidden";

})