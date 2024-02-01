const marvel_heros=["thor","iron man","spiderman"]
const dc_heros=["aquaman","superman","batman"]
//marvel_heros.push(dc_heros)//['thor','iron man','spiderman',[ 'aquaman', 'superman', 'batman' ]]
console.log(marvel_heros)
//console.log(marvel_heros[3][1])
const allHeros=marvel_heros.concat(dc_heros)//[ 'thor', 'iron man', 'spiderman', 'aquaman', 'superman', 'batman' ]
console.log(allHeros)
 const all_new_heros = [...marvel_heros,...dc_heros]// all elements get single then becomes an array//[ 'thor', 'iron man', 'spiderman', 'aquaman', 'superman', 'batman' ]

console.log(all_new_heros)


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)// flat(depth)// takes out all the elements from each child array and make them part of parent array
console.log(real_another_array);

console.log(Array.isArray("Apoorv"))//False

console.log(Array.isArray(another_array))//True

console.log(Array.from("Apoorv"))//Creates an array from an iterable object.//[ 'A', 'p', 'o', 'o', 'r', 'v' ]

console.log(Array.from({name:"Apoorv"}))// it will give [] because we need to tell that we want to make an array with key
console.log(Array.from(Object.entries({name: "Apoorv"})));//[ [ 'name', 'Apoorv' ] ]


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));