const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

let wishes = require("../db/wishes.json");
const {writeData} = require("../utils/index.js")

function init(app) {
  app.put("/wishes", jsonParser, (req, res) => {
    let {userId} = req.body

    let currentUserWishes = wishes.filter(wish => wish.userId === userId)
    
    res.status(200);
    res.send(currentUserWishes);

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

console.log(currentUserWishes);

    res.status(200);
    res.send(currentUserWishes);
  });
}

module.exports = init;
