// singleton means when we create Object with a constructor a single object is created same as design pattern Singleton 
// Object.create()

// object literals
const mySym = Symbol("key1");// symbol
const JSUser = {
    name : "Ustaad",
    age : 81,
    location : "Thiruvananthapuram",
    email : "ustaad@google.com",
    [mySym] : "my key-1",
    isLoggedIn : false,
    "fullName" : "Ustaadoni",
    lastDaysOfLoggedIn : ["Mon","Thurs","Sat"]
}
// --> keys are stored as string->"keys"
console.log(JSUser.lastDaysOfLoggedIn);
console.log(JSUser['email']);
console.log(JSUser[mySym])
console.log(JSUser["fullName"])

// updating or changing  
JSUser.email = "ustaad@yahoo.com";
// Object.freeze(JSUser);
JSUser.name = "hi";
console.log("No change " + JSUser.name)
console.log(JSUser)

JSUser.greetings = function(){console.log("Hello World!!")};

console.log(JSUser.greetings())

JSUser .greetings = function(){console.log(`Hello Welcome! To ${this.name}`)};

console.log(JSUser.greetings())