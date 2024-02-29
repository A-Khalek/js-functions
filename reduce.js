// Array.prototype.reduce()
// reduce method get reduce(previousValue,currentValue,CurrentInd and array)=>previousValue+currentValue,previousIndex

var numbes = [1,2,3,4,5,6];
let previousIndex = 0;
const sum = numbes.reduce((accumulator, currentValue, currentIndex,numbes) => accumulator + currentValue,previousIndex);
console.log(sum);