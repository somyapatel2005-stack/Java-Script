//Classes and objects :
//class is logical entity where we can write method , constructors 
//object is real world entity 

class car {
    start(){
console.log("Car is ready to start");
    }
stop(){
console.log ("Car is ready to stop ");
}    
setBrand(brand){
    this.brandName = brand; //we assigned brand to current class variable, to make it global variable from local variable.
}
getBrand(){
    console.log(this.brandName);
}
}
let car1 = new car(); //we called class car now the variable car1 can use everything car stores.
car1.setBrand("Fortuner");
car1.getBrand(); // Fortuner
car1.start(); //car is ready to start
car1.stop(); //car is ready to stop


//******************************************************************************************************************************************* */


//program to change course

class Student{
    constructor (name,age,course){
        this.name = name;
        this.age = age;
        this.course = course;
    }
    introduce(){ //method
        console.log(`My name is ${this.name} and my age ${this.age}, enrolled in course ${this.course}`,
        );
    }
    setCourse(newCourse) {
        this.course = newCourse;
    }
    getCourse(){
        return this.course;
    }
}
let stu1 = new Student ("Sanya","25","Mernstack"); //object
stu1.introduce();
console.log("Current Course: ",stu1.getCourse());
stu1.setCourse("Java fullstack");
stu1.introduce();
console.log("Current Course: ",stu1.getCourse());
stu1.setCourse("AI/ML");
stu1.introduce();
console.log("Current Course: ",stu1.getCourse());


/***************************************************************************************************************************************** */