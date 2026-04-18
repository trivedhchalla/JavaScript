/**
 * Falsy values: false, "", 0, -0, Bigint 0n, null, undefined, NaN
 * Rest all are truthy values: "0" ,"false" ," " ,[] ,{} ,function(){}
 * && --> AND LOGICAL
 * || --> OR LOGICAL
 * ?? --> Nullish Coalescing Operator
 */

// ??
let val1;
val1 = 3 ?? 23;
console.log(val1);

val1 = null ?? 25;
console.log(val1);

val1 = undefined ?? 79;
console.log(val1);

val1 = undefined ?? null;
console.log(val1);

val1 = undefined ?? null ?? 45 ?? 18;
console.log(val1);

// terniary operator 
// condtion ? true : false 