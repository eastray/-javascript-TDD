/**
 * Created by dhkim on 2017-05-19.
 */
const express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , httpStatus = require('http-status-codes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/post', function (req, res) {
  console.log('POST');
  res
    .contentType('application/json')
    .status(httpStatus.OK)
    .send('OK');
});

app.get('/post', function (req, res) {
  console.log('GET');
  res
    .contentType('application/json')
    .status(httpStatus.OK)
    .send('OK');
});

app.put('/post', function (req, res) {
  console.log('PUT');
});

app.listen(8001, function () {
  log.info('HTTP server started 8001');
});
