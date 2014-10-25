
#READ EVERYTHING CAREFULLY!

##Info on the API

[meshblu.octoblu.com](meshblu.octoblu.com)


[github.com/octoblu/meshblu](github.com/octoblu/meshblu)

##Whats in the ZIP?

There are two folders in the zip file in this repo. 

/yo is a webapp to control your edison. sky.js is where you put your code. Change targetUUID to match your edison's (next step)

meshblu_example is an Intel XDK node project that will allow you to message the edison/galileo to control pins.

In that project file open up main.js and change UUID/TOKEN to match the UUID/TOKEN you'll get in the next step! 

Upload/build the project and you're edison will be ready to be controlled through meshblu/nodeblu!


##Getting a UUID/TOKEN (Registering device)

Go here for a tool that makes it easy. http://hack.build/uuid

##NodeBlu
https://chrome.google.com/webstore/detail/nodeblu/aanmmiaepnlibdlobmbhmfemjioahilm?hl=en-US

##QUICK START! Sample Flow - Copy paste this directly into Nodeblu! (ctrl + v in an empty flow) The in the skynet out node change the device UUID/TOKEN to match yours!

Hit save and it should run!

```
[{"id":"23287939.dcd786","type":"skynet-device","uuid":"ab221231-58b1-11e4-a2e7-8525855b0a62","token":"02yc7qw45x758kt9ijuhifdsdvzbmx6r","name":"edison","dne":""},{"id":"c34319f7.3cbce8","type":"skynet out","name":"","broadcast":false,"device":"23287939.dcd786","outputs":0,"x":1090,"y":446,"z":"8e82740.f717d9","wires":[]},{"id":"93deac73.6c215","type":"function","name":"Digital Out 1","func":"msg.payload = {\"mode\" : \"d_out\", \"pin\" : 13, \"val\" : 1};\nreturn msg;","outputs":1,"x":832,"y":452,"z":"8e82740.f717d9","wires":[["c34319f7.3cbce8"]]},{"id":"cf8f79d0.307088","type":"inject","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"sidebarInput":false,"x":666,"y":454,"z":"8e82740.f717d9","wires":[["93deac73.6c215"]]},{"id":"77695797.8896a8","type":"function","name":"Digital Out 0","func":"msg.payload = {\"mode\" : \"d_out\", \"pin\" : 13, \"val\" : 0};\nreturn msg;","outputs":1,"x":830,"y":511,"z":"8e82740.f717d9","wires":[["c34319f7.3cbce8"]]},{"id":"97a821a6.6857e","type":"inject","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"sidebarInput":false,"x":669,"y":512,"z":"8e82740.f717d9","wires":[["77695797.8896a8"]]},{"id":"2ff35e7f.d00ca2","type":"function","name":"Digital Read","func":"msg.payload = {\"mode\" : \"d_in\", \"pin\" : 13};\nreturn msg;","outputs":1,"x":832,"y":405,"z":"8e82740.f717d9","wires":[["c34319f7.3cbce8"]]},{"id":"ba5c4512.45a3b8","type":"inject","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"sidebarInput":false,"x":664,"y":405,"z":"8e82740.f717d9","wires":[["2ff35e7f.d00ca2"]]},{"id":"2e3aa9b0.d1c556","type":"function","name":"Analog Read","func":"msg.payload = {\"mode\" : \"a_in\", \"pin\" : 0};\nreturn msg;","outputs":1,"x":830,"y":566,"z":"8e82740.f717d9","wires":[["c34319f7.3cbce8"]]},{"id":"cdf0c026.320f4","type":"inject","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"sidebarInput":false,"x":669,"y":567,"z":"8e82740.f717d9","wires":[["2e3aa9b0.d1c556"]]}]
```


##Edison Payload format

Digital Write = {"mode" : "d_out", "pin" : 13 , "val" : 1};



Digital Read			d_in	

Digital Write			d_out

Analog Read				a_in	


##Useful Links Related to Edison

https://github.com/intel-iot-devkit/mraa/blob/master/docs/edison.md
https://software.intel.com/en-us/html5/documentation/getting-started-with-intel-xdk-iot-edition
https://communities.intel.com/message/257322
https://communities.intel.com/docs/DOC-23391
