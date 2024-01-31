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
console.log(typeof myFunction);//object but we call obect function
/********************************************************************** */
/* Stack(Primitive) and Heap Non-Primitive
Memory defined in Stack creates a copy,whereas when defined in heap it give reference of original value . 
*/
let petName = "ram kumar"
let nickName = petName// copy of the petname shared, original is unaffected
nickName = "raju"
console.log(petName)//ram kumar
console.log(nickName)// raju
let userOne={
    email:"test@mail.com",
    upi:"test@upi"
}

let userTwo=userOne// here the reference is shared so any changes made will be affected in the original
userTwo.email="test@yahoo.com"
console.log(userOne.email)//test@yahoo.com
console.log(userTwo.email)//test@yahoo.com
