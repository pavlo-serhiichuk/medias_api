const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

const UserController = require('./controller/User.controller')
const BookController = require('./controller/Book.controller')
const GuitarsController = require('./controller/Guitars.controller')
const VouchersController = require('./controller/Vouchers.controller')
const CountriesController = require('./controller/Countries.controller')
const ArticleController = require('./controller/Article.controller')

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

// res.setHeader("Access-Control-Allow-Origin",  "*")

app.get('/', (req, res) => {
    res.send('Server is working. Status: " №69. Strong connection between space and Earth."');
})
 
UserController(app);
BookController(app);
GuitarsController(app);
VouchersController(app);
CountriesController(app);
ArticleController(app);

app.listen(port, () => {
    console.log('App is run on: http://localhost:' + port)
})

