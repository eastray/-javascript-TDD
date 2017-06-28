/**
 * Created by dhkim on 2017-05-03.
 */
const mqtt = require('mqtt');
const utf8 = require('utf8');
client = mqtt.connect({port: 8002, host: '203.230.100.68'});


let init = JSON.stringify({
  "deviceType": "SAN",
  "ipAddress": "111.111.222.222",
  "status": "가다나다라"
});

let sensingPost = JSON.stringify({
  "sensorId": 1,
  "sensingValue": 30
});


let actuatingPostToDevices = JSON.stringify({
  "actuatingId": "1",
  "actuatorId": "1",
  "actuatingValue": "10",
  "result": "RUNNING"
});

var actuatingPut = JSON.stringify({"result": "SUCCESS"});


client.on('connect', function () {
  //client.publish('/api/v1/devices/search/bySerial/d0002', "GET", {qos: 1});
  //client.publish('/api/v1/devices/limit/search/bySerial/d0001', "GET", {qos: 1});

  //client.publish('/api/v1/devices/1/initialization', init, {qos: 1});

  //client.publish('/api/v1/devices/1/sensors','GET');
  //client.publish('/api/v1/devices/1/actuators','GET');

  //client.publish('/api/v1/sensings', sensingPost);

  //client.publish('/api/v1/devices/1/actuatings/running', "GET");

  //client.publish('/deviceId/1', actuatingPostToDevices, {'qos': 1});

  //client.publish('/api/v1/actuatings/4', actuatingPut, {'qos':1});


  //client.publish('/api/v1/devices/1/actuators', '', {'qos': 1});
  //console.log(buff.toString('utf8'));

  var temp = init.toString('utf8');

  let utf = '가나다라 rkskqkek';

  //var buff = Buffer.alloc(30);
  var buff = new Buffer('가가가가가가가');
  utf = utf8.encode(utf);
  //let resultBuffer = encoding.convert(utf, 'utf-8', 'utf-8');
  //console.log(client.publish('/deviceId/1', buff.toString('utf8')));
  console.log(client.publish('/deviceId/1', utf));

  client.end();
});

/*router.subscribe('/api/v1/deviceActuators/get', function(topic, message, params){
 console.log('received', topic, message);
 });*/
