//arrays:a data structure that allows you to store and organize multiple values within a single variable.It is a versatile and dynamic object. It can hold various data types, including numbers, strings, objects, and even other arrays.
// JS arrays are resizeable., 
//Shallow copy :A shallow copy of an object is a copy whose properties share the same references
//A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. 
// inside array there is a prototype access
const myArr = [0,1,2,3,4,5]
const myHeros =["iron man","thor"]
console.log(myArr[0])
const myArr2 = new Array(10,14,21,33,42,51)
console.log(myArr2[2])
//Array Methods

myArr.push(6)
myArr.push(7)

console.log(myArr)// 6,7 added
myArr.pop()//Last element removed
console.log(myArr)

myArr.unshift(0)//adds at the first position all the previous items moves one position next and it puts load on system
console.log(myArr)
myArr.shift()//removes from first position
console.log(myArr)

console.log(myArr2.includes(13));//false
console.log(myArr2.indexOf(10));//0
const newArr = myArr.join()
console.log(myArr2)//Array
console.log(typeof newArr)// string 
//slice ,splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)// create a copy with a slice of an array

console.log(myn1);//[ 1, 2 ]
console.log("B ", myArr);// doesnot get affected// B  [0, 1, 2, 3,4, 5, 6]


const myn2 = myArr.splice(1, 3)//create a new array with a part taken out of an array
console.log("C ", myArr);// only left with rest of the data//[ 0, 4, 5, 6 ] 
console.log(myn2);//[ 1, 2,3 ]

