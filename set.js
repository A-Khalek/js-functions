// set 
let myArray = [1,2,3,4,5,8];
let myset = new Set(myArray);
// for(let value of myset){
//     console.log(value);
// }
// console.log(myset);

// set convert in arrayBuffer
// console.log([...myset]);

// add object in set
let myObj ={
    a:10,
    b:"bangladesh"
}
myset.add(myObj);
// console.log(myset);

// create a unique array using set
let numers = [100,250,250,100,1,5,4,6,9,8,7,7,8,5,4,4,]

uniqueNumbers = [...new Set(numers)];
// console.log(uniqueNumbers);
let sortNubmbers = uniqueNumbers.sort((a,b)=>a-b);
// console.log(sortNubmbers);

// Union of set
let a = new Set([1,2,3]);
let b = new Set([2,3,3,4]);
let unionSet = new Set([...a, ...b]);
// console.log(unionSet);
// console.log([...unionSet]);

// intersection of Set
let AintersectionB = new Set([...a].filter(x=>b.has(x)));
let BintersectionC = new Set([...b].filter(x=>a.has(x)));
// console.log(AintersectionB);
// console.log(BintersectionC);

// difference of set
let difference = new Set([...a].filter(x=>!b.has(x)))
console.log(difference);
console.log([...difference]);



