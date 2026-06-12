//Synchronous programming

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

 function login(username,callback){
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
 });