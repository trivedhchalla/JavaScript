// arrays => collection of different items with a single name 
// dynamic and mixed
// array create a shallow copy(reference of obj is shared)
// deep copy => completely new object the content inside is same and the refernce of memory is diff 

let arr = [1,2,3,4];
console.log(arr[3]);

arr.push(34);
console.log(arr);

console.log(arr.length)

arr.pop()// removes last if index is not provided
console.log(arr)

arr.unshift(23)// added elements to the start 
console.log(arr)

arr.shift()// removes from start 
console.log(arr);

// looking into arrays
console.log(arr.includes(2))
console.log(arr.indexOf(2))

const newArr = arr.join() // convert arr into a string
console.log(typeof arr);
console.log(typeof newArr);

// slice , splice
console.log(arr.slice(1,3))
console.log("Before " + arr)
console.log(arr.splice(1,3))// popping a range of elements splice(Start,deletecount)
console.log("After " + arr)