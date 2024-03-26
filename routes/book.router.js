const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  createNewBooks,
  updateBooks,
  deleteBooks,
  getBooksById,
} = require("../controllers/book.controller");

//GET
router.get("/", getAllBooks);
router.get("/:id", getBooksById);

//POST
router.post("/",  createNewBooks);

//PATCH
router.patch("/:id", updateBooks);

//DELETE
router.delete("/:id",  deleteBooks);

module.exports = router;
