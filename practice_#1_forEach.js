/**
 * Created by dhkim on 2017-02-23.
 */
let temp = [];
temp.push('aaa');
temp.push('aaa');
temp.push('aaa');
temp.push('aaa');
temp.push('bbb');
temp.push('aaa');
temp.push('aaa');
temp.push('aaa');

let temp2 = [];
temp2.push('bbb');
temp2.push('bbb');
temp2.push('bbb');
temp2.push('bbb');
temp2.push('bbb');

let temp3 = "";

temp.forEach(function (value) {
  temp3 += value.replace(/bbb/, "ccc");
  console.log(value);
  //console.log(temp3);

  if (value === 'bbb')
    console.log('here');
});
console.log('asd: ', temp3);

let tempArr = [];
temp.forEach(function (value, index) {
  tempArr[index] = value;
  console.log('index: ', index);
});
console.log('tempArr: ', tempArr);

//console.log(temp);