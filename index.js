//let vs var vs const keyword
//var can be accessed outside of it's scope which is not a good sign hence to overcome this thing
//let was introduced
//const is used to set value of a variable as constant

//OBJECTS
const person = {
    firstName: "Emily",
    lastName: "Hill",
    age: 26
}

//the THIS keyword
// In JS this keyword refers to an Object, which object depends on how this is being used(invoked or called)
const person = {
  firstName: "Emily",
  lastName: "Hill",
    age: 26,
  fullName: () => {`${this.firstName} ${this.lastName}`}
};


//filter method
const employees = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
    { id: 3, isActive: false },
];
//this code will filter out the employees whose isActive status is true and store it in activeEmployees variable
const activeEmployees = employees.filter((employee) => employee.isActive)

//OBJECT DESTRUCTURING
const address = {
    city: "",
    street: "",
    state: ""
}

const { city, street, state } = address;

//SPREAD OPERATOR
const first = [1, 2, 3];
const second = [4, 5, 6];

//without spread operator
const third = first.concat(second);
//with spread operator
const third = [...first, ...second];

//CLASSES
class Person{
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("walk");
    }
}

const person = new Person("Raman");
person.walk();

//INHERITANCE
class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("walk");
  }
}

class Teacher extends Person{
    constructor(name, degree) {
        super(name);  //super keyword is used to access the constructor of inherited class
        this.degree = degree;
    }

    teach() {
        console.log("teaches");
    }
}

const teacher = new Teacher("Mosh", "Btech");
//"teacher.<HERE>" here we can access the name and function of Person class along with Teacher class


//NAMED VS DEFAULT EXPORTS 

// Default exports are used to export a single "main" value from a module, 
// while named exports allow us to export multiple values with specific names.
// Default exports allow us to import the exported value with any name in the importing module, 
// while named exports require us to use the exact exported names when importing.