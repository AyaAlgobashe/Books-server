const {
  getBookByIdService,
  createBook,
  updateBookService,
  deleteBookService,
  getAllBookService
} = require("../services/book.service");
const { validateCreateBook ,validateUpdateBook} = require("../validators/book.validator");

const books = [
  { id: 1, title: 'Book 1', author: 'Author 1', genre: 'Fiction', price: 20.99 },
  { id: 2, title: 'Book 2', author: 'Author 2', genre: 'Non-Fiction', price: 15.99 },
  { id: 3, title: 'Book 3', author: 'Author 3', genre: 'Fiction', price: 17.99 },
  { id: 4, title: 'Book 4', author: 'Author 4', genre: 'Non-Fiction', price: 23.99 },
  { id: 5, title: 'Book 5', author: 'Author 5', genre: 'Fiction', price: 25.99 },
];


const getAllBooks=async (req, res) => {
  const books = await getAllBookService();
  res.send(books);
};

const getBooksById =async (req, res) => {
  const { id } = req.params;
  const book = await getBookByIdService(id);
  if (!book)
    return res.status(404).send("The book with given ID doesn't exist");
  res.send(book);
};

const  createNewBooks =async (req, res) => {
  try {
    const book = req.body;
    const { error } = validateCreateBook(book);
    if (error)
      return res
        .status(400)
        .send({ errorMessage: `Invalid Form Feild ${error}` });

    const newBook = await createBook(book);
    res.status(201).send(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).send({ errorMessage: 'Internal Server Error' });
  
  }
};




const updateBooks =async (req, res) => {
  const { id } = req.params;
  const book = await  getBookByIdService(id);
  const { error } = validateUpdateBook(book);
  if (!book)
    return res.status(404).send("The book with given ID doesn't exist");
  //joi validation
  const updateBook = await updateBookService(id, req.body);
  res.send(updateBook);
};


const deleteBooks =async (req, res) => {
  try{
  const { id } = req.params;
  const book = await  getBookByIdService(id);
  if (!book)
    return res.status(404).send("The book with given ID doesn't exist");
    deleteBookService(id);
  res.send("book deleted sucessfully");
}
catch (error) {
  res.status(500).send(error);

}
};

module.exports = {
    getAllBooks,
    createNewBooks,
    updateBooks,
    deleteBooks,
    getBooksById,
};
