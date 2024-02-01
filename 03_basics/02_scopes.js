var d = 400
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 40
     console.log("INNER: ", d);//var is accesible outside/inside the scope
    console.log("INNER: ", a);//10 not 300
}
console.log("Outside: ", c);//var is accesible outside/inside the scope whereas let and const wont


function one(){
    const username = "Apoorv"

    function two(){
        const website = "youtube"
        console.log(username);
    }
   //  console.log(website);// not accesible outside function two

     two()

}

 one()

 if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ Mini Hosting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)// will give error because addTwo is not created yet //execution context is not 
const addTwo = function(num){
    return num + 2
}