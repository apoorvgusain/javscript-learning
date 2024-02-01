const tinderUser = new Object()//singleton object
//const tinderUser={}//literal
console.log(tinderUser)//{}

tinderUser.id = "123ABC"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser)//{ id: '123ABC', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Apoorv",
            lastname: "Gusain"
        }
    }
}
console.log(regularUser.fullname.userfullname.lastname)
//optional chaining in object \
/*
Optional chaining is a feature in JavaScript that allows you to access properties or call methods of an object without explicitly checking if each intermediate property is defined. If any property in the chain is null or undefined, the entire chain evaluates to undefined instead of throwing an error.
 */
const user = {
    name: "John",
    address: {
        city: "New York",
        zipcode: "10001",
    },
    orders: [
        { id: 1, product: "Laptop" },
        { id: 2, product: "Phone" },
    ],
};

// Using optional chaining to access properties
const cityName = user?.address?.city; // "New York"
const orderProduct = user?.orders?.[0]?.product; // "Laptop"
const invalidProperty = user?.invalid?.property; // undefined

console.log("City Name:", cityName);
console.log("Order Product:", orderProduct);
console.log("Invalid Property:", invalidProperty);

console.log("*************************************")
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

 const obj3 = { obj1, obj2 }
 console.log(obj3)//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
 const obj5 = Object.assign({}, obj1, obj2,obj4)//{} is use to target a new empty array, otherwise it will get added to obj1 in this case{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
 console.log(obj5)

  const obj6 = {...obj1, ...obj2}// using spread
 console.log(obj6);

 const users = [
    {
        id: 1,
        email: "h1@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    },
    {
        id: 3,
        email: "h3@gmail.com"
    },
]

console.log(users[1].email)

console.log(tinderUser);

console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));//[ '123ABC', 'Sammy', false ]
console.log(Object.entries(tinderUser));//[ [ 'id', '123ABC' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('Sammy'));//works for key

//Destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Apoorv"
}
console.log(course.courseInstructor)

const {price} = course// short the syntax 
console.log(price)

const {coursename:name} = course// short the syntax 
console.log(name)