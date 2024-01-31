const name = "apoorv"
const repoCount = 50

//console.log(name+ repoCount + " Value");// old syntax
//string intropolation using back tick `
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// single quotes also works
console.log('Hello my name is ${name} and my repo count is ${repoCount}');
//string is an object
const gameName = new String('Apoorv-gusain-com')
console.log(gameName)//[String: 'Apoorv-gusain-com']
console.log(gameName[0])//A
console.log(gameName.__proto__)//gives an empty object
console.log(gameName.length)//17
console.log(gameName.toUpperCase())//APOORV-GUSAIN-COM
console.log(gameName.charAt(4))//r
console.log(gameName.indexOf("o"))//2/ first o
let newString = gameName.substring(0,4)
console.log(newString)//Apoo

let sliceString = gameName.slice(-6)
console.log(sliceString)//uses negative value and prints from behind
const newStringOne = "   Apoorv    "
console.log(newStringOne);
console.log(newStringOne.trim())// removes spaces from start and end

const url = "https://google.com?q=new%20times"

console.log(url.replace('%20', '-'))// replace with dash//https://google.com?q=new-times
console.log(url.includes('sundar'))//false //to check if it includes a word

console.log(gameName.split('-'));// convert string into array based on dash [ 'Apoorv', 'gusain', 'com' ]