// let a = 10 ;
// const b = 20;
// var c = 300;

if(true){
    let a = 34;
    const b = 1;
    // var c = 3;
    console.log("Inner A",a)
    console.log("Inner B",b)
    // console.log("Inner C",c)
}

console.log(a)// this throws error with 1,2,3 lines commented 
console.log(b)// this throws error with 1,2,3 lines commented since let is used and is block scope 
// console.log(c)
/*
var get changed so use let instead of it
*/