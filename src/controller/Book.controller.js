const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const books = require("../db/books.json");
const {writeData} = require("../utils/index.js")
const filterProducts = require("../utils/filters.js");

function init(app) {
  app.get("/books", (req, res) => {

    res.status(200)
    res.send(books);
  });

  app.post("/books/filtered", jsonParser, (req, res) => {
    filterProducts(books, req.body, res);
  });
}

module.exports = init;
