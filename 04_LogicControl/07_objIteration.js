// iteration on Object

// for in loop always return keys 

const myObj = {
    game1 : 'NBA',
    game2 : 'IPL'
}

for (const key in myObj) {
    const element = myObj[key];    
    console.log(`Key ${key} Values ${element}`);
}


const arr = ["JS","CPP",'JAVA','PYTHON']
for(const lang in arr){
    console.log(lang , ' :- ' , arr[lang]);
}

// maps are not iterable so we cannot use for in loop 