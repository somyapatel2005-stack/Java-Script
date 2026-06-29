//program to run time for 10 seconds.

let clock =setInterval(function(){
    const now = new Date();
    console.log(now.toLocaleTimeString());
},1000);

//10 secs

setInterval(function(){
    clearInterval(clock);
    console.log("clock Stopped here");
},10000);