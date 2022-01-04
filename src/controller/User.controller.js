const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const users = require('../db/users.json')

module.exports = function init(app) {
    
    app.post('/login', jsonParser, (req, res) => {
        const {email, password} = req.body;
        console.log(email, password)
        const result = users.filter(i => i.email === email && i.password === password);

        if (result.length) {
            console.log('/login  success: ', result.length, email, password, result[0]);
            return res.send(result[0]);
        }

        console.log('/login  error: ', 400,{email, password});

        res.status(400);
        res.send({error: 'Wrong credentials. Please try again!'})
    }
    
    );
    
    app.post('/signin', jsonParser, (req, res) => {
        const {email, password, tel, username} = req.body;
        console.log('Sign in: ', email, password, tel, username);
        
        const result = users.filter(i => i.email === email);

        if(result.length) {
            res.status(400);
            res.send({error: 'This account is already exist. Please try another email.'});
        }
        let newUser = {email, password, tel, username}

        let newUsers = users.concat([...users, newUser])

        res.status(200);
        res.send(newUser)
    }
    
    );
}