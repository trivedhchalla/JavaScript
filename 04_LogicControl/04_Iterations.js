// for 
for(let indx  = 0; indx < 10 ; indx ++){
    if(indx == 5) continue;
    console.log(indx);
}
for(let indx  = 0; indx < 10 ; indx ++){
    console.log(`Outter Loop ${indx} `);
    for(let i = 0; i <= 10; i++){
        console.log(`Outter Loop ${indx} Inner Loop ${i}`);
    }
}

// break and continue 
/**
 * break ---> the execution comes out for the loop
 * continue ---> skips the part after the and goes from i to i + 1
 */
``