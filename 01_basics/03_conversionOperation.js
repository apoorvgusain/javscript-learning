let score = "200"

//console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

score="200BC"
valueInNumber = Number(score)//converts into number but when call it will give NAN 
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//NAN


score=null
valueInNumber = Number(score)//converts into number but when call it will give 0, which is wrong, make sure you check. 
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//0


score=true
valueInNumber = Number(score)//converts into number but when call it will give 1
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//NAN


score="Apoorv"
valueInNumber = Number(score)//converts into number but when call it will give NAN 
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//NAN

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
// "apoorv"=> NaN
console.log("****************************")
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)//true

isLoggedIn = ""
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)//false

isLoggedIn = "Apoorv"
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)// true


// 1 =>true | 0 => false
// "" => false
// "Apoorv" => true

console.log("****************************")
let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)//string 