// rest operator : ...name

function vals(...nums){
    return nums;
}

// console.log(vals(120,232,23,1,212,1));// this prints only one element i.e 120

function addToCart(val1,val2,...vals){
    return vals;
}

// console.log(addToCart(100,23,69,23))

const obj = {
    Username : "Name",
    prices : 23,
    items : 3,
}
// if the obj prop changes then it prints undefined 
// solution is type checking 
function handleObject(use){
    console.log(`Username is ${use.Username} and price is ${use.price}`);
    return ;
}

// handleObject(obj);

const myArr = [10,20,199,278];
function returnSecondVal(arr){
    return arr[1];
}

// console.log(returnSecondVal(myArr));
