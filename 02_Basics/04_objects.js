// const tinderUser = new Object();

const tinderUser = {}

tinderUser.id = 12321;
tinderUser.name = "Hello ";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser = {
    email : "google@google.com",
    name : {userFullName : {
        firstName : "hello",
        lastName : "World"
    }}
};

// console.log(regularUser.name.userFullName.firstName);
// console.log(regularUser.name.userFullName.lastName);

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "c", 4 : "d"};

const obj3 = {...obj1,...obj2};
let obj4 = Object.assign({},obj1,obj2);

// console.log(obj1)
// console.log(obj2)
// console.log(obj3)
// console.log(obj4)

// => How values come from databases
const users = [
    {
        id:1,
        email : "h@gmail.com"
    },
    {
        id:1,
        email : "h@gmail.com"
    },
    {
        id:1,
        email : "h@gmail.com"
    }
]

// users.forEach(element => {
//     console.log(element);
// });

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('fullname'))