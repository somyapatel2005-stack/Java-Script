//Hoisting :js moves variable and functions declaration to the top of their scope before running the code.

/*
greet ();
function greet(){
    console.log("hey");
}
*/


/*
//var
console.log(a);
var a = 10;//undefined
*/


/*
//let and const

console.log(x);
let x=100;\*/
//temporary deathzone-hosting allocation ho but initialization n ho

/************************************************************************************************************************************** */
/*
console.log (x);//undefined
var x=100;
function test(){
    console.log(x);//undefined as var is declared after print
    var x=1000;
    console.log(x);//1000
}
test();
console.log(x); //100 as it took global variable not local
*/

/**************************************************************************************************************************************** */

//Error
/*

var sayHii;
sayHii();
sayHii = function(){
    console.log("Hello Coders");
}; //error as sayHii is not a function its a variable
*/

/*************************************************************************************************************************************** */
/*
function fun(){
    console.log(x);//undefined
    var x=100;
    if(true){
        var x = 20 ;
        console.log(x);//20
    }
    console.log(x);//20
}
fun();
*/

/******************************************************************************************************************************/

//OBJECT DESTRUCTURING