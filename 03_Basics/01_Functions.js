// function a package for repeated lines of code 
function myName(name){
    console.log(name);
}

myName("Hitesh");

function add(a , b){
    return a + b;
}

console.log(3,4);
// checking for conditions
function loginMsg(user){
    if(!user){
        console.log("Please provide a user name");
        return;
    }
    return `${user} logged in...`;
}
console.log(loginMsg("chai-aur-code"));

// default parameters
function userMsg(name = "Kushal"){
    return `${name} to World Class Company`;
}
console.log(userMsg());
