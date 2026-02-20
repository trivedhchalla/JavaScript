// =>Datatypes are two types : on basis of how they are stored and used from the memory

// i)Primitive : when we use call them a new copy is returned 
//      7 types: String Number Boolean null Symbol bigInt 

// const id = Symbol('123')

// const anotherId = Symbol('123')

// console.log(id === anotherId)

// ii)Non-Primitive / Reference: when we use them their refernce is given 
//      Types:  Array, Objects, Functions 

// Dynamically typed language 

// const heros = ["Love Babbar","chai aur code","code with harry"]

// let myObj = {
//     name : "Hello WOrld!",
//     birth: "JavaScript",
//     DOV:20022026
// }

// const myFunction = function(){
//     console.log('Hello World')
// }

// myFunction()

// => checking datatype of a variable or coonstants 
// typeof
const min = -1 // number 

let isLoggedIn = true // boolean

const max = null // obejct 

const name = "Chai Aur Code!!!" // string

let minmax; // undefined

console.log(typeof minmax)