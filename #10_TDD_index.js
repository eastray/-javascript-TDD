/**
 * Created by dhkim on 2017-05-12.
 */
let express = require('express');
let app = express();
let morgan = require('morgan');
let bodyParser = require('body-parser');
let user = require('./node_api/api/user');

if(process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true}));

app.use('/users', user);

module.exports = app;