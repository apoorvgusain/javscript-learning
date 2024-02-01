const score = 400
console.log(score);//400

const balance = new Number(100)
console.log(balance);//[Number: 100]
//number object will come with some methods
console.log(balance.toString().length);//3
 console.log(balance.toFixed(1));//no of digit after deciman

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));
// The toPrecision() round of the number in decimal after 4 digit so it will give 123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));10,000,00

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);//Object [Math] {}
console.log(Math.abs(-4));//negative to always positive 
console.log(Math.round(4.5));//5 
console.log(Math.ceil(4.2));//round-up 5
console.log(Math.floor(4.9));//round-down 4
console.log(Math.min(4, 3, 6, 8));//finds the min value
console.log(Math.max(4, 3, 6, 8));//finds the max value

console.log(Math.random());// gives a random number in 0.1343 value within 0 and 1
console.log((Math.random()*10) + 1);// (0.13*10)+1=1.3+1=2.3
console.log(Math.floor(Math.random()*10) + 1);// floor was used to round of the number 2.3~3

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //set a range between min and max 