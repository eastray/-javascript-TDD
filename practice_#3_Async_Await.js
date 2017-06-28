/**
 * Created by dhkim on 2017-03-03.
 */

function getName() {
  return 'dhkim';
}

function getAge() {
  return 28;
}

function getAddress() {
  return 'addressaddressssssss'
}

function bindingFunction(name, age, address) {
  console.log('name: '+ name +', age: '+age+', address: '+address);
}

async function getInfo() {
  console.log('Start Async Await Function.');
  const name = await getName();
  console.log('name: ', name);
  const age = await getAge();
  console.log('age: ', age);
  const address = await getAddress();
  console.log('address: ', address);
  await bindingFunction(name, age, address);
  console.log('Finished Async Await Function.')
}

getInfo();
