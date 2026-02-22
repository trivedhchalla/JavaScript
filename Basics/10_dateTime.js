// Dates

const myDate = new Date()

// console.log(myDate.toString())

// console.log(myDate.toISOString());

// console.log(myDate.toLocaleString());

// console.log(myDate.toUTCString())

// console.log(typeof myDate);

const myNewDate = new Date(2026,1,22)
// const myNewDate = new Date("2024-01-28") 

console.log(myNewDate.toString());

const myTimeStamp = Date.now()

console.log(myTimeStamp);

// getting time in ms for comparision
console.log(myNewDate.getTime())

// customizing the toLocaleString
const createdDate = new Date()
console.log(createdDate.toLocaleString('default',{
    weekday:'long',
    timeZone:'IST'
}))

