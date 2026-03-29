function one(){
    const userName = "hitesh one";
    function second(){
        const website = "wwwlhitesh-choudhary.com"
        console.log(userName);
    }
    // console.log(website);// throws an undefined website 
    // second();
}

// one()

if(true){
    const userName = "hitesh one";
    if (true){
        const website = "wwwlhitesh-choudhary.com"
        // console.log(userName + " " + website);
    }
    // console.log(website);// throws an undefined website 
}
// console.log(userName)// this also throws an error 


// +++++++++++++++ Interesting ++++++++++++++++

addOne(3)// no effect 
function addOne(num){
   return num + 1;
}
addOne(5)

addTwo(4)// acessing this at this point will throw error 
const addTwo = function(num){
    return num + 2;
}

addTwo(4)

// --> This is basics intution of hoisting