// Array.findIndex()

const numbers = [10,25,14,36,15];

let findNumber = numbers.find((elements)=>elements>=10);
// console.log(findNumber);

// find array index

let index = numbers.findIndex((elements)=>elements>=15);
let last = numbers.findLast((elements)=>elements>=10);

const isLargeNumber = (element) => element > 45;
let lastIndex = numbers.findLastIndex(isLargeNumber);
console.log(lastIndex);