//apply() = in Apply method the function will call immediately.
//The arguments are pass in array form.

const Person ={
    name:"Somya",
};
function profile(Designation , Salary){
console.log(`Name: ${this.name}, Designation : ${Designation}, salary : ${Salary}`,

);
}
profile.apply(Person,["Mern-Stack Developer",100000]);


/******************************************************************************************************************************************* */


//bind() = by the help of above methods(call,apply) we cant call the function immediately.Firstly we have to create a new varible and after that we can bind the function and call that particular function

const Person1 ={
    name:"Reena",
};
function greet(city) {
    console.log(`${this.name} is living on ${city}`);

}
const newFunc = greet.bind(Person1);
newFunc("LoveIsland");

/******************************************************************************************************************************** */


const student = {
    name:"Mannat"
};
function result(Course , Score){
console.log(`Name : ${this.name}, Course : ${Course} , Score : ${Score}`);
}
result.call(student,"EC",8.8);
result.apply(student,["CS",6.7]);
const res1 = result.bind(student);
res1("EE",8.9);


/**************************************************************************************************************************** */

//Higher Order Function : Higher order function are those functions which takes another function as an argument or return an another function.

