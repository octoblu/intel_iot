
         
        var conn = skynet.createConnection({
  
      "server": "ws://meshblu.octoblu.com"// optional - defaults to ws://skynet.im
      
    });

 var targetUUID = "ab221231-58b1-11e4-a2e7-8525855b0a62" ;

 conn.on('notReady', function(data){
      console.log('UUID FAILED AUTHENTICATION!');
      console.log(data);
     conn.register({"type" : "edison_companion"}, function(data_reg){
         
         console.log(data_reg);});
    });

    conn.on('ready', function(data){
      console.log('UUID AUTHENTICATED!');
      console.log(data);



$( "#led_on" ).click(function() {

    conn.message({
        "devices": targetUUID,
        "payload": {"mode": "d_out", "pin" : 13, "val" : 1  }
        
      });
  
});
        
$( "#led_off" ).click(function() {

    conn.message({
        "devices": targetUUID,
        "payload": {"mode": "d_out", "pin" : 13, "val" : 0  }
        
      });
  
});      
    });
        
 