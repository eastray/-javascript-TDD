/**
 * Created by dhkim on 2017-03-22.
 */

function firstFunc() {
  return new Promise(function (resolve, reject) {
    const firstParameter = 'First Parameter.';
    const secondParameter = 'Second Parameter.';
    resolve({firstParameter, secondParameter});
  });
}

function secondFunc(obj) {
  return new Promise(function (resolve, reject) {
    const {firstParameter, secondParameter} = obj;
    console.log(firstParameter);
    console.log(secondParameter);
  });
}

function thirdFunc() {
  return Promise.resolve(firstFunc())
    .then(secondFunc);
}

thirdFunc();

