/**
 * if(condition){
   
    }else{
    
    }
 */
const score = 90;
if(score > 50){
    let power = "Swim";
    console.log(`Power : ${power}`)
}

// short hand notation 
const sc = 1000;
if(sc > 500) console.log("test - 1");
if(sc > 500) console.log("test-2"),console.log("test-3");
if(sc < 500){
    console.log("Poor");
}else if(sc < 750){
    console.log("Middle Class");   
}else if(sc <= 1000){
    console.log("Rich Shreyank")
}else{
    console.log("Ultra Rich - Arun")
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = false;

if(userLoggedIn && debitCard){
    console.log("Payment successfull");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("Logged In ...")
}