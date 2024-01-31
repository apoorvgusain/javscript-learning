// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// both have two different data type
console.log("2" > 1);//true
console.log("02" > 1)//true

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true
/* The reason is that an equality check == and comparison ><, >= ,<= work differently.
Comparison convert null to a number,treating it as 0. That is why (3) null>=0 is true and (1) null > 0 is false 
 */

console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false

//Strict Check ===

console.log("2"===2)// it also checks the data type so will give false

