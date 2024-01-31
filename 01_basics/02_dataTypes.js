"use strict"; // treat all JS code as newer version, by defualt now days it stict

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3  + 3) // code readability should be high

console.log("Hitesh")

//Primitive Data Types
let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);//false

console.log(typeof anotherId);//symbol
const bigNumber = 3456543576654356754n
console.log(bigNumber)

// number => 2 to power 53
// bigint => This data type can represent numbers greater than 253-1 which helps to perform operations on large numbers,writing ‘n’ at the end of the value
// string => represents a sequence of characters that are surrounded by single or double quotes.
// boolean => true/false
// null =>  data type can hold only one possible value that is null.
// undefined => undefined is ‘value is not assigned’.
// symbol =>  used to create objects which will always be unique. these objects can be created using Symbol constructor.









// Non-Primitive:  Array, Objects, Functions
console.log(typeof undefined); // undefined
console.log(typeof null); // object


const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
