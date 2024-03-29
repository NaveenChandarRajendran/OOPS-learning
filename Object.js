//The object can be two types
// 1) Object Literal
// 2) Object Constructor

// * Object Literal

let person = {
    first_name: 'Mukul',
    last_name: 'Latiyan',

    //method
    getFunction: function () {
        return (`The name of the person is 
          ${person.first_name} ${person.last_name}`)
    },
    //object within object
    phone_number: {
        mobile: '12345',
        landline: '6789'
    }
}
console.log(person.getFunction());
console.log(person.phone_number.landline);

// 2) Object Constructor

function person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
}
// Creating new instances of person object
let person1 = new person('Mukul', 'Latiyan');
let person2 = new person('Rahul', 'Avasthi');

console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);


//Javascript Object.create() creates a new object using the existing object and do not change the origin object.

const coder = {
    isStudying: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I 
			studying?: ${this.isStudying}.`)
    }
}
// Object.create() method
const me = Object.create(coder);

// "name" is a property set on "me", but not on "coder"
me.name = 'Mukul';

// Inherited properties can be overwritten
me.isStudying = true;

me.printIntroduction();

let cloneCoder = Object.create(coder);
cloneCoder.isStudying = true;
console.log(coder.isStudying);
console.log(cloneCoder.isStudying);
