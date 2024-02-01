//singleton:Ensure a class has only one instance a provide a global point of access to it.
// with literals singleton object doesnot get created ,only with constructor

//object literals
const mySym = Symbol("key1")

const mySym2 = Symbol("key2")
const JSUser = {
    firstName:"Apoorv",
    lastName:"Gusain",
    "full name":"Apoorv Gusain",
    mySym:"My Key one",
    [mySym2]:"My Key Two",
    age:25,
    gender:"male",
    location:"Delhi",
    email:"apoorv@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday,Wednesday"]
}
console.log(JSUser.firstName)//Apoorv

console.log(JSUser["full name"])//Apoorv this method is used to access keys with space and symbols
console.log(JSUser.mySym)//My Key one 
console.log(typeof JSUser.mySym)//this is a key

console.log(JSUser[mySym2])//My Key Two
console.log(typeof JSUser[mySym2])//this is a unqiue key

JSUser.email="apoorv@fb.com"// updates the email
//Object.freeze(JSUser)// prevent objects from any change
JSUser.firstName="Rahul"// does not throw error but changes nothing
console.log(JSUser)//Uncomment the freeze to see the result

JSUser.greeting = ()=>{
    console.log("Hello")
}
JSUser.greeting()// prints hello


JSUser.greeting2 = function(){
    console.log(`Hello ${this["full name"]}`)
}
JSUser.greeting2()// prints hello
