const express = require('express');
const debug = require('debug')('app');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');


const port = process.env.PORT || 8080;
const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'trelloAss', resave: true, saveUninitialized: true }));
//add public folder use
//app.use(); //add node_modules for css
//app.use(); //add node_modules for jquery js
//app.use(); //add node_modules for bootstrap js

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/views/index.html');
});



app.listen(port, () => {
  debug('trelloAssist dev server started');
});
