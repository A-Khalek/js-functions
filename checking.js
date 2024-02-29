// const array = [1,2,3];

// let c = array.find((num)=> num % 2 === 1 );
// let c = array.filter((num)=> num % 2 === 1 );
// let c = array.slice(0,2);
//  array.push(8, 10);
//  array.push(9);

// let array1 = array.concat(5,6);
// let c = array.pop();
// let c = array.shift();
// let result = array.splice(1,2,'x');
// let result = array.map((e)=>e*2);

// let result = array.forEach((e)=>{
//     console.log(e*2);
// });

// console.log(array);
// console.log(result);


// let fruites = ["apple","orange","bannana","jackfruit","mango"];
// let numbers = [1,10,8,3,2,7,6,4,9,5];
// const people = [{name:"Humayn", age:35, gpa:3.95},
//                 {name: "Fahim", age: 23, gpa: 3.5},
//                 {name: "shamim", age: 28, gpa: 3.5}
//             ];

// fruites.sort();
// numbers.sort((a,b)=>a-b);
// people.sort((a,b) => a.age - b.age);

// console.log(fruites);
// console.log(numbers);
// console.log(people);


// const numbers = [2,5,6,7,8,9,]
// // numbers.reverse(); 
// // let newArr = numbers.concat().reverse(); 
// let newArr1 = [...numbers].reverse();
// const stirng = "coding is fun";
// const revStr = stirng.split('').reverse().join('')
// console.log(revStr);
// console.log(numbers);
// console.log(newArr);
// console.log(newArr1);


// destructuring in js

// object destructuring 

// const user = {
//     id: 120,
//     name: "Humayun",
//     age: 35,
//     educatoin:{
//         univercity: "BUBT",
//         degree: "B.Sc"
//     }
// }

// const {name} = user;
// console.log(name);
// const {name:title} = user;
// console.log(title);
// const {educatoin:{degree} = {}} = user;
// console.log(degree);

// Array destructuring 

const numbers = [1,2,3,[50,100,500],4,56,8];
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

var [a,b] = numbers;
var [a,b] = plants;
console.log(a,b);
// var [,c,d] = numbers;
// console.log(c,d);
// var [,,,[,e,f]] = numbers;
// console.log(e,f);