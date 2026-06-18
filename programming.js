//Synchronous programming
//async - automatically creates promise and returns it
//return promise- manually creates promise

/*console.log("Task1");
console.log("Task2");
console.log("Task3");
//Asynchronous Programming
//set Timeout is inbuilt func of javascript which provides some delay in execution of the code.

function hello() {
    console.log("Gives Delays");
}
setTimeout(hello, 2000);

console.log("task1");
console.log("task2");
setTimeout(()=>{
    console.log("Happy Evening");
},2000)
console.log("Task3");
console.log("Task4");*/

//callback function -used as an argument for another func

/*function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,callback){
    callback(a,b);

}
 calculator(2,3,sum);*/

 //when we use nested callback function,one inside another callback function and so on so it looks like a pyramid,it makes the code complex it is known as callback hell.
//program for callback hell

/* function getData(dataId,nextId){
    setTimeout(() => {
        console.log("Data",dataId);

        if(nextId) {
            nextId();
        }
    },1000);
 }
 getData(1,() => {
    console.log("Callback hell1");
    getData(2,() => {
        console.log("Callback hell2");
        getData(3,() => {
            console.log("Callback hell3");
            getData(4,() => {
                console.log("Callback hell4");
            });
        });
    });
 });*/

 //program for data callback

 /*function login(username,callback){
    console.log("Username:",username);
    callback();
 }
 function password(pass,callback){
    console.log("Password:",pass);
    callback();
 }
 login ("Somya",() => {
    password("1234", () => {
        console.log("Login Successful");
    });
 });*/

 //promise is a function which eventually the completion of task. It indicates eventually a completion of task .It is javascript object.

 //let promise = new Promise((resolve,reject) => { })
    //resolve is completion of task and reject is failure of task.
//the 3 states of promise
//1)pending: when function is in process
//2)fullfilled: completion of task
//3)rejected: 


//program for resolve

/*function getData (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
resolve("Success");
        },2000);
    });
}
let promise = getData() ;
console.log(promise);
//.then- we use this when we want to see result.catches the success result is runs the next code.
promise.then((res)=>{
    console.log(res);
    console.log(promise);
});*/


//program for reject

/*function getData (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
reject("Some error");
        },2000);
    });
}
let promise = getData() ;
console.log(promise);
promise.catch((err)=>{
    console.log(err);
    console.log(promise);
});*/

//program while passing data

/*function getData(id){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data",id);
        resolve("Success");
    },2000);
});
}
let promise=getData(123);
console.log(promise);
promise.then((res)=>{
    console.log(res);
    console.log(promise);
});*/


// promise chaining: it is the concept in which no. of function is executed and its state will be rejected or reslove simultaneously.
//program for promise chaining 

/*function async1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Success");
        },2000);
    });
}

function async2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Again Success");
        },2000);
    });
}
async1().then((res)=>{
    //we are calling/running async1 first and then storing success in res
    console.log("Fetching Data1");
    console.log(res);
    return async2();
    //we are calling /running async2 and then using then we will store Again Success in res 
})
.then((res)=>{
    console.log("Fetching Data2");
    console.log(res);
});*/

//async /await: it is a aynchronous function which is built on top of promise.
//async keyword is used to return promise after completion of reject or resolve.
//await is used to give the pause of the execution of the post until the response will obtained.(wait here until the promise gies result then continue)

//program for async 
/*
async function greet(){
    return "Hello";
}
greet().then(console.log);
*/

//program for await

/*
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Fetching Data");
        },2000);
    });
}
async function getCall(){
    const response = await getData();
    console.log(response);
}
getCall();
*/

//program example
/*
function getFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(100);
        },2000);
    });
}
async function getResult(){
    console.log("Fetching A");
    const response = await getFunc();
    console.log(response);
    console.log("Fetching B");
}
getResult();
console.log("Fetching C");
*/


//Error Handling = Try catch = async/await

//program async m error handling possible h using try catch
/*
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Some Error taylor swift");
        },1000);
    });
}

async function getResult(){
    try{
        console.log("Hello");
        const response = await getData();
}catch(error){
        console.log(error);
    }
}
getResult();
*/

//program for two functions 
/*
function async1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Data 1");
            resolve();

        },3000);
    });
}
function async2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Data 2");
            resolve();

        },3000);
    });
}
async function getData() {
    console.log("Start Fetching Data.....");
    await async1();
    await async2();
    console.log("Completed");
}
getData();
*/

//clousers: an inner functions can remember and access variables of its outside function , even after the outer function has finished running.
//Closure is a feature in javascript where an inner function can remember and can access the variables of outer functions even after the executing of outer function has finished
//Uses: 1) Accessing private data .
//2) Callback functions.
//

//program for closure
/*
function outer(){
    let message = "Hello Coder";

function inner (){
    console.log(message);
}
return inner;
}
const MyFunction = outer();
MyFunction();
*/

//another ex code
/*
function createCount(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}
const counter = createCount();
counter();
counter();
counter();
*/

//Using independent function for calling outer function.
/*
function createCount(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}
const counter1 = createCount();
const counter2 = createCount();
counter1();
counter2();
*/

//program for checking balance.
/*
function bankAccount(){
    let Balance = 1000;
    return function (){
        console.log(Balance);
    }
}
const checkBalance = bankAccount();
checkBalance();
*/

//program to check username

/*
function Instagram(){
    let Username = "Somyayaya";
    let user = prompt ("Guess the Username");
    while (Username != user){
    user = prompt("Try Again");
}
console.log("You are right");
    return function (){
        console.log(Username);
    }
}
const checkUsername = Instagram();
checkUsername();
*/

//Curring is the feature of javascript in which there is passing of no. of arguments to a function is converted into a chain of function taking argument one by one by each function. 
// curring is a technique where a function with multiple arguments is transformed into a sequence of functions , each taking one argument at a time.
//pizza order ex 
//example
/*
function add(a,b,c){
return a+b+c};
}
//
function add(a){
return function (b){
    return function(c){
        return a+b+c;
    }
}
}*/

// curring addition code

/*
function add(a){
return function (b){
    return function(c){
        return a+b+c;
    };
};
}
console.log(add(10)(20)(30));
*/

//program for multiplying 

/*
function multiply(a){
    return function(b){
        return a*b;
    };
}
const double= multiply(2);
const triple= multiply(3);
console.log(double(10));//2*10
console.log(double(20));//2*20
console.log(triple(10));//3*10
console.log(triple(20));//3*20
*/

//program to greet 

/*
function greet (greeting){
return function (name){
return `${greeting} ${name}`;
};
}
const sayHello = greet("Hello");
console.log(sayHello("Aanya"));
console.log(sayHello("Somya"));
*/

//discount calculator
/*
function discountCalculator(percent){
    return function(price){
        return price-(price*percent)/100;
    };
}
const tenPercentDiscount = discountCalculator(10);
const twentyPercentDiscount = discountCalculator(20);
const thirtyPercentDiscount = discountCalculator(30);
console.log(tenPercentDiscount(1000));
console.log(twentyPercentDiscount(1000));
console.log(thirtyPercentDiscount(1000));
*/

//program to calculate GST

/*
function FoodOrder(GST){
    return function (price){
        return price+(price*GST)/100;
    };
}
const gstCalculator = FoodOrder(18);
console.log(gstCalculator(1000));
*/

//another program to calculate gst only

/*
function FoodOrder(GST){
    return function (price){
        return (price*18)/100;
    };
}
const gstCalculator = FoodOrder(18);
console.log(gstCalculator(670));
*/

//another program to calc gst

/*
function addTax(taxRate) {
    return function (amount){
        return amount + (amount*taxRate)/100;
    };
}
const gst18 = addTax(18);

console.log(gst18(100));
console.log(gst18(500));
*/
