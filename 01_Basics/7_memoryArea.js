// =>Memory Types:

// i)Stack: primitive datatypes 
let age = 12

let realAge = age 

console.table([age,realAge])

age = 19

console.table([age,realAge])

// age got change but the realAge is not since a copy of age is passed to it not exact value

// ii)Heap: refernce datatyes 

let userOne = {
    name :"Xys-usa",
    dreamDestination : ["USA","CHINA","JAPAN"]
}

let userTwo = userOne

console.log(userOne)

console.log(userTwo)

userTwo.dreamDestination.push("TAIWAN")

console.log("After change:\n",userOne)

console.log(userTwo)
