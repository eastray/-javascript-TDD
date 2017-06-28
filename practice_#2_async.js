const async = require('async');

async.series([
    // 1st
    function (callback) {
      aFunction();
      callback(null,true);
    },
    // 2nd
    function (callback) {
      bFunction();
      callback(null,true);
    },
    function (callback) {
      cFunction();
      callback(null,true);
    }
  ],
// callback (final)
  function (err, results) {
    console.log(err); // null
    console.log(results); // [1, 2]
  });


function aFunction() {
  console.log('here is A Function...');
}

function bFunction() {
  console.log('here is B Function...');
}

function cFunction() {
  console.log('here is C Function...');
}


/*
 /!**
 * Created by dhkim on 2017-02-27.
 *!/



 //let tasks = [aFunction(),bFunction(), cFunction()];

 let tasks = [function (callback) {
 setTimeout(function () {
 console.log('1111');
 aFunction();
 }, 200);
 },
 function (callback) {
 setTimeout(function () {
 console.log('2222');
 bFunction();
 }, 200);
 },
 function (callback) {
 setTimeout(function () {
 console.log('3333');
 cFunction();
 }, 200);
 }];

 async.series(tasks, function (err, results) {
 console.log('All Functions Passed')
 });

 /!*waterfall([
 function () {
 aFunction();
 },
 function () {
 bFunction();
 },
 function () {
 cFunction();
 },
 function (err, result) {
 if(err)
 console.log('Failure.');
 else
 console.log('Success.');
 }
 ]);*!/

 /!*aFunction(function () {
 bFunction(function () {
 cFunction(function () {
 console.log('All Function Finished.');
 });
 });
 });*!/

 function aFunction() {
 console.log('here is A Function...');
 }

 function bFunction() {
 console.log('here is B Function...');
 }

 function cFunction() {
 console.log('here is C Function...');
 }

 */
