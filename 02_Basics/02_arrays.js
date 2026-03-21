let uTube = ['Nitish Singht','Chai aur code','Code with HArry',]
let entern = ['ab cricinfo', 'south indian logic']

uTube.push(entern);
console.log("push: ");
console.log(uTube);

entern = uTube.concat(entern);
console.log(entern);

// ... => this is called as spread operator used to merge arrays into one 
const allChannel = [...uTube,...entern];

// flat() nd -> kd 
const arr = [1,2,[5,6],[[1,2],[3,4]]]

const flatted = arr.flat(Infinity);
console.log(flatted);

// ==> Convertin and checkig for arrays from scraped data 
console.log(Array.isArray("ab cricinfo"));
console.log(Array.from("ab cricinfo"));
// specify for dicts as key or values 
console.log(Array.from({name:"Ab ustaad"}))