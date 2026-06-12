//we have no. of students whose score = [50,70,80,88,90,99],find
//the students whose score is greater than or equal 90 by using
//filter method.

/*
const score = [50,70,80,88,90,99];
const result = score.filter((marks) => {
    return marks >= 90;
});
console.log(result);*/

//Take a number randomly, and take number from user , if the number 
//UserName both are equal then user win the game , otherwise
// , user will provide number again and again until it reachesto correct.

/*let number = 25;
let userNumber = prompt ("Guess the number");
while (number != userNumber){
    userNumber = prompt("Try Again");
}
console.log("You win the game");*/

//Take a size of an array from user , determine the sum of an array by using reduce method

/*let size = prompt("Enter the size of an array");
let arr = [];
for(let i = 1; i<=size ; i++){
    arr[i-1]= i ;
}
const sum = arr.reduce((acc,curr)=>{
    return acc + curr;

});
console.log(sum);*/

