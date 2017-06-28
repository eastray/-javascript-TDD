/**
 * Created by dhkim on 2017-03-06.
 */

class FirstClass {
  constructor() {
    this.secondClass = new SecondClass();
    this.name;
    this.age;
  }

  setName(name) {
    this.name = name;
  }

  setAge(age) {
    this.age = age;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }
}

class SecondClass {
  constructor() {
      //this.firstClass = new FirstClass();
    // 위의 주석을 해제할 경우, FirstClass와 SecondClass의 객체가 서로 생성되어 Call Stack 초과 발생
  }
}

let firstObject = new FirstClass();

function executeFunction() {
  firstObject.setName('dhkim');
  firstObject.setAge('28');
}

executeFunction();

function outPutFunction() {
  const name = firstObject.getName();
  const age = firstObject.getAge();
  console.log('name: ', name, " , age: ",age);
}

outPutFunction();