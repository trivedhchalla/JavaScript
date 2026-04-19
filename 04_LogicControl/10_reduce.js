// reduce 
const nums = [1,2,3];

let total = nums.reduce((acc, curVal) =>{
    console.log(`Acc ${acc} and Currval ${curVal}`);
    return acc + curVal
    },0
)

console.log(total)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const totalMoney = shoppingCart.reduce((total, currCourse) => total + currCourse.price,0);
console.log("Total:", totalMoney);
