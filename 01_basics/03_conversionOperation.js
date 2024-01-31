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
//  "null"=>0
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

console.log("************Operations****************")
 let value = 3
 let negValue = -value//-3
 console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);
  let str1 = "hello"
  let str2 = "hitesh"

  let str3 = str1+str2
   console.log(str3);

 console.log("1" + 2);// 12
 console.log(1 + "2");//12 
 console.log("1" + 2 + 2); //122
 console.log(1 + 2 + "2"); //32
 console.log(1 + "2" + 2); //122
 console.log(typeof(1 + 2 + 2+"4")); //string
 //if string is first then rest will become string but if there are number with operation involved the operation get performed later converted into string 

// console.log(+true);// gives 1
// console.log(+"");  // give 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // it will work but not appreciated as it need to be more readable

let gameCounter = 100
++gameCounter;//101 prefix
console.log(gameCounter);
gameCounter++;//102 post fix
console.log(gameCounter);
