const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const articles = require('../db/articles.js')

function init(app) {
    app.get('/articles', (req, res) => {
        console.log('requested');
        let articlesIntro = articles.map(article => ({...article, description: article.description.split(' ').slice(0, 50).join(' ')}))
        console.log('in process');
        res.send(articlesIntro);
    });

    app.get('/article', function (hasCome, willGo){ 
        const  id = +hasCome.query.id; 
        const filteredArticles = articles.filter(a => a.id === id)
      
        if (!!filteredArticles.length){
            willGo.status(200);
            willGo.send(filteredArticles[0]); 
        }
            
        willGo.status(400);
        willGo.send({error: 'Article is not avaliable...'});
      });
}

module.exports = init;