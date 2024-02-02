//arrow functions  expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage

// this method 
const user = {
    username:"apoorv",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this) //gives value of current context
        /*Output {
            username: 'apoorv',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]///This is how function returns
            } */
    }
}

user.welcomeMessage()//apoorv, welcome to website
user.username="Sam"
user.welcomeMessage()//Sam, welcome to website
console.log(this)// under the node enviroment it give empty {} but in browser the global context is window so it returns window objects.

// this with functions

function chai(){
    let username ="Apoorv"
    console.log(this)// inside function many values comes Object[global]
    console.log(this.username)//undefined it shows this works in the object only not in function
}
chai()

const chai2 = function(){
    let username ="Apoorv"
    console.log(this.username)// this also gives undefined
}
chai2()

const chai3 = ()=>{
    let username ="Apoorv"
    console.log(this.username)// this also gives undefined
}
chai3()

console.log("**********************************************")

const addTwo = (num1,num2) => {
    return num1 + num2 //explicit return
}
console.log(addTwo(3,4))

const addTwo1 = (num1,num2) => num1 + num2 // return is implict(obvious) so no need to write, return added then error
console.log(addTwo1(14,24))

const addTwo2 = (num1,num2) => (num1 + num2) //  when using bracket no return required but when used curly braces return need to be write
console.log(addTwo2(4,2))

const printNameTest =(name) => {firstname : name} //  undefined results 
//const printNameTest =(name) => { return {firstname : name} }//  to print object results 
console.log(printNameTest("Amit"))

const printName =(name)=>({"firstname":name})// to declare an object we need to remove currly braces and use brackets instead
console.log(printName("Ajay"))