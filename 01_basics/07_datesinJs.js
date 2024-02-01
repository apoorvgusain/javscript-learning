// date begins from midnight Jan 1 1970 UTC, and gives value in milliseconds, it is an object
let mydate = new Date()
console.log(mydate)//2024-02-01T07:41:34.526Z
console.log(mydate.toString())// Thu Feb 01 2024 07:41:34 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toDateString())// Thu Feb 01 2024 07:41:34 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toLocaleDateString())//2/1/2024
console.log(typeof mydate)//2/1/2024
//months start with 0 in JS
let myCreateDate = new Date(2023,0,23,5,3)//(YYYY,MM,DD,HH,MM)
console.log(myCreateDate)//2023-01-23T05:03:00.000Z
console.log(myCreateDate.toLocaleString())//1/23/2023, 5:03:00 AM

let newCreateDate = new Date("02-07-2023")//(MM,DD,YYYY)
console.log(newCreateDate)//2023-02-07T00:00:00.000Z
console.log(newCreateDate.toLocaleString())//2/7/2023, 12:00:00 AM



// DD/MM/YYYY
const result1 = new Date().toLocaleDateString('en-GB');
console.log(result1); //  24/07/2023


let myTimeStamp = Date.now()

console.log(myTimeStamp);//1706774784123
console.log(myCreateDate.getTime());//1674450180000
console.log(Math.floor(Date.now()/1000));// in seconds 1706774784

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);//0+1=2 feb
console.log("Day "+newDate.getDay());//gets the day of the week (thursday-4)

let dateNew=newDate.toLocaleString('default', {
    weekday: "long",
    
})//we define object inside it

console.log(dateNew);