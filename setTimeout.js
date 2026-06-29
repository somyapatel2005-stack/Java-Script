//set Timeout is inbuilt func of javascript which provides some delay in execution of the code.
//SetTimeout is the timer function which behaves as a schedular to provide a particular delay to a particular function which is written inside the timeout function or timer.
//clearTimeout() - clear the set timeout
//clearTimeout function which is used to clear/reject the timer schedule by the setTimeout function for a particular function.
//setInterval -  the timer runs repeatedly
//SetInterval r those functions which provide a fix delay for execution of a particular function nd this function will repeatedly execute again and again 
//clearInterval- so that setInterval wont work.

//program for settimeout
/*
let a = setTimeout(function(){
    alert("This is timer function,which return timer Id to a function")
},2000)

//use of cleartimeout

clearTimeout(a);
console.log(a);
*/

/********************************************************************************************************************************************** */

//ex
/*
let a=setTimeout(function(){
    console.log("Hey Baby");
},2000);
let b= prompt("Do you want to activate a timer");
if("No"== b){
    clearTimeout(a);
}
    */


   /******************************************************************************************************************************************* */

   //setinterval
/*
setInterval(function(){
    console.log("Tan");
},1000);
*/

/************************************************************************************************************************************* */
/*
const sum = (a,b,c)=>{
    console.log("Yes,I am running",a+b+c);
};
*/

/************************************************************************************************************************************ */
/*
let count = 0;
let id = setInterval(function(){
    count++;
    console.log("Count",count)
    if(count==5){
        clearInterval(id);
        console.log("Stop Counting");
    }
},2000); 
*/

/************************************************************************************************************************************* */

