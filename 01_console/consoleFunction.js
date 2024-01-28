console.log("Hello Visual Studio Code....")
let thisVar = "One"
let thatVar = "Two"
console.log("\nthisVar:", thisVar, "and thatVar:", thatVar);
let myString = "This is a string"
let intNumOne = 100
let intNumTwo = 200
let floatNum =  20.321232423
let objectVar = {"item-one":"book","item-two":"pen"}
let jsonData = {
    "employee":{"name":"John", "age":30, "city":"New York"}
    }
console.log("String Value: %s ",myString)
console.log("Number Value: %d + %i = 300",intNumOne,intNumTwo)
console.log("Float Value: %f ",floatNum)
console.log("Object Value: %o ",objectVar)
// calling json data using %s,%o,and %j
console.log("JSON Value(/%s): %s ",jsonData)
console.log("JSON Value: %o ",jsonData)
console.log("JSON Value: %j ",jsonData)
//console.log(document.body)
console.error("This is an error")
const username = 'JohnDoe';
console.info(`User ${username} is logged in.`);