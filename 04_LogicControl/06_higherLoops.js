// for of loop

const arr = [1, 2, 3, 4, 5];
for(const i of arr){
    console.log(`Val of ${i}`);
}

const greetings = "Good Morning";
for(const char of greetings){
    console.log(char);
}

const map = new Map();
map.set("IN","India");
map.set("US","United States Of America");
map.set('FR','France')

console.log(map);
// map.keys() map.values()
for(const [key,val] of map){
    console.log(key)
}

// Objects are not iterable 
const myObj = {
    game1 : 'NBA',
    game2 : 'IPL'
}

// for(const [key, val] of myObj){
//     console.log(key, ':-', Val);
// }