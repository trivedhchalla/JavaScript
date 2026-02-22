// =>Memory Types:

// i)Stack: primitive datatypes 
let age = 12

let realAge = age 

console.table([age,realAge])

realAge = 19

console.table([age,realAge])

// since realAge got new copy of age the age didnot got changed only the realAge is changed

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
