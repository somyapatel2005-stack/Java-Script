//let item= [22,44,55,77,99];
//offer = 10%
//new price of item ?
//let total = 0;
//for (let value of item){
   // total = value - value/10;
   // console.log(value ,total);
//}

//push() => add elements at the end
//pop() => removes last element of array
//toString => it converts array into string 
//unshift() => it adds element from start
//shift() => it removes element from start
//concat() => it adds multiple arrays in an array
//slice() => it fetch piece of data
//splice()=> add , remove on the basis of indexing 

//ex
let fruits = ["Apple", "Banana", "Mango"];
fruits.push("Kiwi");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("Orange");
console.log(fruits);

fruits.shift();
console.log(fruits);

let arr = ["somya","aanya","anushka"];
let arr1 = ["Teena" , "Veena", "Reena"];
let arr2 = ["Rahul","Tan", "Priyav"];

let newarr = arr.concat(arr1,arr2);
console.log(newarr);

let arr = ["somya","aanya","anushka"];
let newarr = arr.toString();
console.log(newarr);

//slice(startIndex , endIndex)

let arr = ["somya","aanya","anushka"];
let newarr = arr.slice(0,2);
console.log(newarr);