/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */
/*global */

/*
A simple node.js application intended to blink the onboard LED on the Intel based development boards such as the Intel(R) Galileo and Edison with Arduino breakout board.

MRAA - Low Level Skeleton Library for Communication on GNU/Linux platforms
Library in C/C++ to interface with Galileo & other Intel platforms, in a structured and sane API with port nanmes/numbering that match boards & with bindings to javascript & python.

Steps for installing MRAA & UPM Library on Intel IoT Platform with IoTDevKit Linux* image
Using a ssh client: 
1. echo "src maa-upm http://iotdk.intel.com/repos/1.1/intelgalactic" > /etc/opkg/intel-iotdk.conf
2. opkg update
3. opkg upgrade

Article: https://software.intel.com/en-us/html5/articles/intel-xdk-iot-edition-nodejs-templates
*/
var skynet = require('skynet');

var conn = skynet.createConnection({
  "uuid": "ab221231-58b1-11e4-a2e7-8525855b0a62",
  "token": "02yc7qw45x758kt9ijuhifdsdvzbmx6r"  //,
//  "server": "localhost", // optional - defaults to ws://skynet.im
//  "port": 3000  // optional - defaults to 80
});

var mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the Intel XDK console

 var digital_out;
 var digital_in;
 var analogPin;
// var pwm;
 var temp;

conn.on('ready', function(data){
  console.log('Ready');

  conn.on('message', function(data){
    console.log(data.payload.mode);
      
      switch(data.payload.mode) {
    case "d_out":
        digital_out = new mraa.Gpio(data.payload.pin); 
        digital_out.dir(mraa.DIR_OUT); 
        digital_out.write(data.payload.val);
        break;
    case "d_in":
        digital_in = new mraa.Gpio(data.payload.pin); 
        digital_in.dir(mraa.DIR_IN); 
        temp = digital_in.read();
               conn.message({
                    "devices": data.fromUuid,
                    "payload": { "digital_pin" : data.payload.pin , "val" : temp} 
               });
        break;
    case "a_in":
        analogPin = new mraa.Aio(data.payload.pin); 
        temp = analogPin.read(); //read the value of the analog pin
                 conn.message({
                        "devices": data.fromUuid,
                        "payload": { "analog_pin" : data.payload.pin , "val" : temp} 
                });
        break;
  /* case "pwm":
              pwm = new mraa.Pwm(data.payload.pin, -1, false);
              pwm.enable(true);

              //set the period in microseconds.
              pwm.period_us(2000);
              pwm.pulsewidth_us(data.payload.val); //Write duty cycle value. 
        break; */
    default:
        
}
      
  });

  conn.status(function (data) {
    console.log(data);
  });

/*  conn.message({
    "devices": "0d3a53a0-2a0b-11e3-b09c-ff4de847b2cc",
    "payload": {
      "hello":"world"
    }
  });
*/
});

