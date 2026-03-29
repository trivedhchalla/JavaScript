const user = {
    name : "hitesh",
    price : 999,
    welcomeMsg : function(){
        console.log(`${this.name}, welcome to website`)
    }
}

// user.welcomeMsg()
// user.name = "hello World"
// user.welcomeMsg()

// console.log(this);

// +++++++++++++++ Arrow Function +++++++++++++++++++
function chai(){
    const userName = 'Hitesh';
    console.log(this.userName);
}
// chai()

const code = function(){
    const userName = 'Hitesh';
    console.log(this.userName);
}
// code()

const aur = () => {
    const userName = 'Hitesh';
    console.log(this.userName);
    console.log(this);
}
aur()
 
const addTwo = (num1 , num2) => (num1 + num2);
// console.log(addTwo(3,4))


/**
 * this ---> is used as oop kind of 'this' for an object
 * in global inside node context this is just an empty object
 * in global inside a browser is a window   
 * () => {}
 * implicit return for single line ops () => <expression> 
 * when {} return must be used 
 * when () no need of return statement 
 * 
 * 
*/