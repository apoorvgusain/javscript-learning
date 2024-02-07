//The Promise is an **object** represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
/*
A Promise is in one of these states:

1)pending: initial state, neither fulfilled nor rejected.
2)fulfilled: meaning that the operation was completed successfully.
3)rejected: meaning that the operation failed.
 */

const promise1 = new Promise(function(resolve,reject){
    //do an async task
    // DB calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()// when used so "then" promise consumed runs
    },1000)
})
promise1.then(function(){
console.log('Promise consumed')
})

 new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2")
        resolve()// the resolve() should be call inside the setTimeout callback to ensure that it's resolved only after the asynchronous task is complete.
    },1000)
}).then(function(){
    console.log("Promise 2 consumed")
})

const promise3 = new Promise( function(resolve,reject){
    setTimeout(function(){
        
        resolve({username:'chai',email:'chai@mail.com'})
    },1000)
})
promise3.then(function(user){
    console.log(user)//{ username: 'chai', email: 'chai@mail.com' }
})

const promise4 = new Promise(function(resolve,reject){
    let error = false
    setTimeout(function(){ if(!error){
        resolve({ username: 'apoorv', email: 'apoorv@mail.com' })
    }
    else{
        reject('Error: something went wrong')

    }},1000)
})

promise4.then((user)=>{ //handles the resolve state
    console.log(user)
    return user.username
}).then((username)=>{//recieves the return value of first then this method is called chaining
    console.log(username)
}).catch(function(err){// this handle reject state of promises
    console.log(err)
}).finally(()=>{
    console.log("The promise is either resolved or rejected")
})

const promise5 = new Promise(function(resolve,reject){
    let error = true
    setTimeout(function(){ if(!error){
        resolve({ username: 'gusain', email: 'gusain@mail.com' })
    }
    else{
        reject('JS Error: something went wrong')

    }},1000)
})
async function consumeFive(){
   
    try {
        const response = await promise5// await promise5() this not how we consume because its an 
    
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumeFive()// async await cant directly handle errors so requires to be in try catch


async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()// await is used because this process might take time so to run it after the completion of process we use await
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

// 404 code goes to then because catch runs when fetch not able to send request to server
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
