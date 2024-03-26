window.addEventListener("load", () => {
  getAllBooks();
});

const getAllBooks = () => {
  const url = "http://localhost:3005/api/books";
  fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      jwt: sessionStorage.getItem("token"),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let books = data;
      books.map((book) => {
        const booksData = document.createElement("h3");
        booksData.innerHTML = book.title;
        document.body.appendChild(booksData);
      });
    });
};
