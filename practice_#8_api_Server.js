/**
 * Created by dhkim on 2017-05-11.
 */
var temp1 = 123;
var temp2 = 456;

console.log('number is ${temp1}, ${temp2}');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  asd(temp1, function () {
    console.log('123 fin : &{temp1}')
  });
});

function asd(param){
  console.log('param: ', param);
}


