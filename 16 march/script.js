/*{
    let a = 10;
    const b = 20;
    console.log(a);
    console.log(b);
}

// console.log(a);
// console.log(b);

let c = 30;
const name = "john";
var d = 100;
{
    var myname =":Sanjana";
}
console.log(myname);

const firstName = "John";

console.log(firstName, typeof firstName);

let age = 20;
console.log(age, typeof age);

let eligible = true;
console.log(eligible, typeof eligible);

let course;
console.log(course, typeof course);

let aptNumber = null;
console.log(aptNumber, typeof aptNumber);

const arr = [1,2,3,4,5];
console.log(arr, typeof arr);

let person = {
    name: "John",
    age: 34,
};

console.log(person, typeof person); */

let name = "john";
let newName = name;

newName = "Doe";
console.log(name, newName);

let person = {
    name: "Geeta",
    age: 30,
};

let newPerson = person;
person.name = "seeta";
console.log(person, newPerson);