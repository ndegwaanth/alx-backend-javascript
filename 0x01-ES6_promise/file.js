// hello = val => 
//     console.log("hello" + val)

// hello("tony")


// const number = [23, 44, 53, 56]
// let maxval = Math.max(...number)
// console.log(maxval)

// let language = "english";
// let word = "";

// for(let x of language) {
//     word += x + "";
//     console.log(word);
// }

// const person = {
//     firsrname: "Anthony",
//     lastname: "Ndegwa",
//     age: "22",
//     course: "BSIT"
// };

// let id = Symbol('id');
// person[id] = 234555;

// console.log(person)

// // const names = ['Anthony', 'ndegwa', 'johnson', 'Kamau'];
// // const f = names.entries();

// // for (let x of f) {
// //   document.getElementById("demo").innerHTML += x + '<br>';
// // }

// let array = Array.from('Anthony');

// for (let m of array){
//     let p = m + "";
//     p = p.toUpperCase();
//     console.log(p);
    
// }

const numbers = [2,5, 7, 86, 100];
for (let x of numbers){
    function maxfunc(x, index, array) {
        return x > 86;
    }

}
let max = numbers.find(maxfunc);


console.log(max)

let b = Number.MIN_SAFE_INTEGER;
let c = Number.EPSILON;
let v = Number.MAX_SAFE_INTEGER;
console.log(v)
