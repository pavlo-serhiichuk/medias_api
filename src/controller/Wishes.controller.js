const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const wishes = require("./wishes.json"); 
const books = require("../db/books.js");
const vouchers = require("../db/vouchers.js");
const guitars = require("../db/guitars.js");
const {writeData} = require("../utils/index.js")

function init(app) {
  app.get("/wishes", (req, res) => {

    res.send(books);
  });

  app.post("/wish", jsonParser, (req, res) => {
    
    const {userId, category, productId} = req.body;

    let wish = wishes.find(w => w.userId === userId  && w.category === category  && w.productId === productId)
    let isWishExist = !!wish;
    let wishesToWrite = [];
    let message = ''

    console.log({wish});
      if(isWishExist) {
        // delete
        message = 'Wishes was deleted'
        wishesToWrite = wishes.filter(w => w !== wish);
      } else {
        // add
        message = 'Wishes was added'
        wishesToWrite = [...wishes, {userId, category, productId}];
      }
        // write to file
        writeData('./wishes.json', wishesToWrite)

    res.status(200);
    res.send({message});
  });
}

module.exports = init;
