const name = "WEB-DEV" // or 'WEB-DEV' both are same 

let repoCount = 10

// old method
// console.log(name + " repository count is = " + repoCount)

// String interpolation 
console.log(`Course I am currently working is ${name} and my repositiry count is ${repoCount}`)

const gameName = new String('Hello world')// stored as a key : value pairs 

// console.log(gameName[0])

// console.log(gameName__proto__) // returns the object attributes and methods

// console.log(gameName.length)

// console.log(gameName.toUpperCase()) // not inplace stack memory 

// console.log(gameName.charAt(10))

// console.log(gameName.indexOf('e'))

// const subStr = gameName.substring(1,6)

// console.log(subStr)

// slicing that same as python negtive indexing possible 
// const anotherSub = gameName.slice(-5,-1)

// console.log(anotherSub)

// trim
const newStringOne = "   hitesh    "

// console.log(newStringOne)

// console.log(newStringOne.trim())

// replace()
const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace("%20","-"))

console.log(url.includes('hitesh'))

// split()
const ji = "histesh-choudhary-hit-20-off"

console.log(ji.split('-'))

