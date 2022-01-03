const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const books = require("../db/books.js");
const likedUserBooks = require("../db/liked_user_book.js");
const filterProducts = require("../utils/filters.js");

function init(app) {
  app.get("/books", (req, res) => {
    console.log("requested");

    res.send(books);
  });

  app.post("/books/filtered", jsonParser, (req, res) => {
    filterProducts(books, req.body, res);
  });

  app.get("/book", (req, res) => {
    if (!req.query.author) {
      return res.send({ error: "You must provide an author!" });
    }

    res.send(books);
  });

  app.post("/book/liked", jsonParser, (req, res) => {
    const userId = +req.body.userId;
    console.log("/book/liked", { userId });

    const likedBooksMapping = likedUserBooks.filter(
      (i) => i.user_id === userId
    );
    const likedBooks = likedBooksMapping.map((i) =>
      books.find((book) => book.id === i.book_id)
    );
    res.send(likedBooks || []);
  });

  app.post("/book/add", (req, res) => {
    const { author, title, liked, image } = req.query;
    console.log("/book/add", { author, title, liked, image });
    res.send(books);
  });
}

module.exports = init;
