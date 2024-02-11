//when this is called inside a function it check the global ec but if it does not have global then it will give{}

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}
function createUser(username, email, password){
    SetUsername(username)//only refernce was passed not run
    SetUsername.call(username)//after calling Setusername function it gets flushed out from memory so to retain the assigned value we use this
    SetUsername.call(this, username)// this.username=username this is what we are trying to do is giving createUser this and asking to use their this to assign value so all the value will be added in createUser this
   
    this.email = email
    this.password = password
}


const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);