/**
 * Immediately Invoked Function Expressions
 * used when we want the function to be executed as we start the website 
 * used when the functions variables should not be intervened by global scope 
 * (declaration)() --> iife syntax 
 * used to remove pollution from global scope 
 * alwayas we ";" at end of iife since it does not know the end of scope 
 * 
 */

// named iife 
(function chai() {
    console.log('DB CONNECTED...')
})();

// anonumous iife 
((name) => {
    console.log(`DB CONNECTED...2 ${name}`)
})('code aur chai');


