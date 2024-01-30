const accountId = 144553
let accountEmail="test@mail.com"
var accountPassword="123245"
accountCity="Delhi"// variable declared without keyword
let accountState //it will print undefined
//accountId=213 //not allowed to change const
console.log(accountId)
accountEmail="test2@mail.com"
accountPassword="55453"
accountCity="Dubai"
/*
Prefer not to use var
because of issue in block scope and functional scope 
*/
console.table([accountEmail,accountId,accountPassword,accountState])