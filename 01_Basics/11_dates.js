// date object which represents a moment in time from 1 january 1970 UTC
// date is always in string in ms
// date => is object type 

const myDate = new Date();
console.log(myDate)

//// convert to string 
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())

//  intiallize a date object month indexing from 0-january
// Date(year,month,date,hours,minutes,seconds,ms)
let myCustomDate = new Date(2023,1,23);
console.log(myCustomDate.toLocaleDateString());

// formats 
// let formatDate = new Date("2006-11-30")
let formatDate = new Date("11-30-2006")

console.log(formatDate.toLocaleString())

// ==> Time stamps
let timeStamp = Date.now()
console.log(timeStamp)

console.log("Which is executed first: " + (timeStamp - formatDate.getTime()))

// ==> Getter are provided by Date object 

// ==> customization using the toLocaleString('internationlization',{customization options})

