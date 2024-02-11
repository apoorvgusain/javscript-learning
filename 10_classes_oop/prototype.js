 let myName = "hitesh     "
let mychannel = "chai     "
console.log(myName.length)
// console.log(myName.trueLength);// not exist 
 console.log(mychannel.trim().length)// 
let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.apoorv = function(){
    console.log("Apoorv Is Strongest of all")
}// prottype function was created at the parent level i.e object so all its child: function,array,string  will also have . 
heroPower.apoorv()
myHeros.apoorv()

Array.prototype.getStrongestHero = ()=>{
    console.log("Strongest hero is Apoorv")
}

myHeros.getStrongestHero()
//heroPower.getStrongestHero()// it will not run because it does not have the function declared to it only its child Array will have access to it


//inheritance
const User = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
/*
The object to change its prototype.
Sets the prototype of a specified object o to object proto or null. Returns the object o. */
Object.setPrototypeOf(TeachingSupport,Teacher)

let newName= "gusain         "
String.prototype.trueLength= function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
     console.log(`${this.trim().length}`)
    
}
newName.trueLength()
"spider    ".trueLength()
