//"for of"  loop
const arr = [1,2,3,4,5]

//for (const iterator of object(i.e data set)){}

for (const num of arr){
    console.log(num)
}
const greetings = "Hello Everyone"
for (const greet of greetings){
    console.log(`Each char is ${greet}`)
}
// Map:it holds unique value and retains the order of insertion
const map=new Map()
map.set('IN','India')
map.set('US','United States')
map.set('UK','United Kingdom')
map.set('IN','India')
console.log(map)

for (const [key,value] of map){
    console.log(key,':-',value)
}
//for in is not possible because its not iterable

const myobject = {
    'game1':'NFS',
    'game2':'Spiderman'
}// this object is not iterable so will not work with for

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }