const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

let books = require("../db/books.json");
let guitars = require("../db/guitars.json");
let vouchers = require("../db/vouchers.json");

let wishes = require("../db/wishes.json");

function init(app) {
  app.put("/wishes", jsonParser, (req, res) => {
    let {userId} = req.body

    let wishesMaping = wishes.filter(wish => wish.userId === userId)
    
    let wishesProducts = []

    wishesMaping.map(w => {
      if (w.category === 'books') {
       return books.map(book => book.id === w.productId && wishesProducts.push(book))
      } else if (w.category === 'guitars') {
        return guitars.map(guitar => guitar.id === w.productId && wishesProducts.push(guitar))
      } else if (w.category === 'vouchers') {
        return vouchers.map(voucher => voucher.id === w.productId && wishesProducts.push(voucher))
      }
    }) 

    res.status(200);
    res.send(wishesProducts);

  });

  app.post('/wish', jsonParser, (req, res) => {
    let wishesToWrite = [];
    const {userId, category, productId} = req.body;
    let index = wishes.findIndex(w => w.userId === userId && w.category === category && w.productId === productId)
    let exist = index >= 0;

    if (exist) {
      wishes.splice(index, 1); // deleted wish
      wishesToWrite = wishes;
    } else {
      wishesToWrite = [...wishes, {userId, category, productId}];
    }

    // const message = exist
    //     ? 'Wishes was deleted'
    //     : 'Wishes was added'

    wishes = wishesToWrite;
    writeData('../src/db/wishes.json', wishesToWrite)

    let currentUserWishes = wishes.filter(wish => wish.userId === userId)

    res.status(200);
    res.send(currentUserWishes);
  });
}

module.exports = init;
