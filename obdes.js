//object destructuring : 
/*
const student = {
    name: "Rahul",
    age:33,
    Post:"MernStack Developer",
};
const{name,age,Post}=student;
console.log(name);
console.log(age);
console.log(Post);

const{Postc:Designation}=student;
console.log(Designation);
*/

/***************************************************************************************** */

/*
const Person = {
    name:"Neha",
address:{

city: "Indore",
state: "MP",
},
};
const{
    address: {city,state},
}= Person;

console.log(city);
    console.log(state);
*/

/************************************************************************************************************************************* */

/*
function printUser({name,age}){
    console.log(name);
    console.log(age);
}
const user= {
    name :"Somya",
    age: 18,
};
printUser(user); //Somya 18
*/
/************************************************************************************************* */
//program using rest operator
/*
const Student = {
    name: "Ashrey",
    age:24,
    course:"Mern",
    city:"Indore",
};const{name,...rest}= Student;
console.log(name);
console.log(rest);
*/