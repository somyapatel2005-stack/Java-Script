//INHERITANCE : It is the concept of OOPS in which one class inherit the properties of another class is known as inheritance .
// Child class inherit all the properties and methods of parent class.

//program for inheritance
/*
class Animal{
    eat(){
        console.log("Eating Habit");

    }
    sleep(){
        console.log("Sleeping Habit");
    }
}
class Cat extends Animal {
    meow(){
        console.log("Cat is Meowing ");
    }
}
let Oggy = new Cat();
Oggy.eat();
Oggy.sleep();
Oggy.meow();
*/

class Employee{
    constructor(name){
this.name = name;
    }
       showName(){
        console.log(this.name);
       }
    }
}
class Age extends Employee{
    constructor(name,age){
        super(name);
        this.age=age;
    }
}
class Address extends Employee{
    constructor(name,address){
        super(name);
        this.age = this.age;
    }
}
class Role extends Employee{
    constructor(name,role){
        super(name);
        this.role = role;
    }
}

//rest operator and spread operator