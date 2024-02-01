function sayMyName(){
    console.log("A");
    console.log("P");
    console.log("O");
    console.log("O");
    console.log("R");
    console.log("V");
}
//sayMyName// is reference
 sayMyName()//execution
// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){//parameters

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)//arguments

console.log("Result: ", result);

function loginUserMessage(username ){//check username
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

 console.log(loginUserMessage())

 function loginUserMessage2(username="Sam" ){//default value assigned
    if(!username){
        console.log("PLease enter a username");
        return//undefined
    }
    return `${username} just logged in`
}

 console.log(loginUserMessage2())// no argument passed so it will use default value Sam
//... is also known as spread operator but base on the use case it is also call rest Operator
 function calculateCartPrice(val1, val2, ...num1){
    return num1//prints 500,200
}

 console.log(calculateCartPrice(200, 400, 500, 2000))

 const user = {
    username: "Apoorv",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

 handleObject(user)
 handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[3]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));