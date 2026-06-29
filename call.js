//call()  
//apply()
//bind()
//we can call any function with object
//The above methods is used to control this keyword
//By the help of above methods we can call functions passing with objects and parameters

/**************************************************************************************************************************** */

//call()= by the help of call method we can immediately call a functions
//arguments are passing with this methods  by using commas.

const Person1={
    name:"Aanya",
}
const Person2 = {
    name: "Somya",
};
function introduce(course,city) {
    console.log(`Name: ${this.name},Course:${course},City:${city}`);
}   
 introduce.call(Person1,"MERN","Indore");
 introduce.call(Person2,"Java","Indore");

 
