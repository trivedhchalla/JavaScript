// for each loop 
const arr = ["JS","CPP",'JAVA','PYTHON'];

arr.forEach(function (val){console.log(val)});

arr.forEach((item) => {console.log(item)});

function print(val){
    console.log(val);
}

arr.forEach(print)

arr.forEach((val, index, arr) => {
    console.log(val, index, arr);
})

const myCoding = [
    {
        lang : "JavaScript",
        fileEx : "js"
    },
    {
        lang : "Python",
        fileEx : "py"
    },
    {
        lang : "Java",
        fileEx : "java"
    },
]

myCoding.forEach( (item) => {
    console.log(item.lang)
})