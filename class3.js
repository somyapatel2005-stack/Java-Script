/*let count = 0;
count CountVowel = (str) => {
    for (last str1 of str) {

    }
}*/

// forEach() => It is used to apply on an array to iterate the elements.

/*let array = [1,2,3,4,5];
array.forEach((arr) => {
console.log(arr);
});

let fruits = ["Peach","Blueberry","Cherry"] // variable name then loops
fruits.forEach((fruit => {
    console.log(fruit);
}));

let age = [1,2,3,4]
age.forEach((age)=>{
    console.log(age*2)
});

let a = [1,2,3,4,5];
const SquareFunc = (num) => {
    console.log (num*num);

};
a.forEach(SquareFunc);

callback function => call func are those
  functions which are passed as an argument to another function

function greet(name) {
    console.log("Hi ", name);
}
function process(callback){
    callback("Urvashi");
}
process(greet); */

//Sum

/*function Addition(a,b){
    console.log(a+b);
}
function processSum(a,b,callback){
    callback (a,b);
}
processSum(2,3,Addition); */

//Reduce method is used to convert an array into single element

//let array = [1,2,3,4,5];
//syntax=> array.reduce((accumulator, currentValue) => {
  //  return accumulator + CurrentValue;
//}, initialValue);

/*let sum = array.reduce((acc,curr) => {
    return acc + curr;
},0)
console.log(sum);*/

/*let fruits = ["Cherry","Cherry","Kiwi","Dragonfruit","Kiwi","Watermelon"];
const count = fruits.reduce((acc ,curr) => {
    acc[curr] = (acc[curr]||0) + 1 ;
    return acc;
},{});
console.log(count);
*/

//we have no. of students whose score = [50,70,80,88,90,99],find
//the students whose score is greater than or equal 90 by using
//filter method.


