// dependecies
const express = require('express');

// modules
const index = require('./routes/index');
const users = require('./routes/users');
const bodyParser = express.urlencoded({extended: true});

// vars
const PORT = process.env.PORT || 8080;
const app = express();

// app
app.use(bodyParser);
app.use('/', index);
app.use('/users', users);

app.listen(PORT, () => console.log(`Listening to port: ${PORT}...`));
