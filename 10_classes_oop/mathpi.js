const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
//{value: 3.141592653589793, writable: false, enumerable: false, configurable: false}
/*
getOwnPropertyDescriptor(Object Name, Object Property Name)
The Object.getOwnPropertyDescriptor() static method returns an object describing the configuration of a specific property on a given object (that is, one directly present on an object and not in the object's prototype chain). The object returned is mutable but mutating it has no effect on the original property's configuration.
*/
// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,// if enumerable is false the we cannot iterate so now 'name' will not be displayed    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {// allows the object to iterate
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}