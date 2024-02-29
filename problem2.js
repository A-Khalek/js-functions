var addTwoNumbers = function(l1, l2) {
    var sum1 =  parseInt(l1.reverse().join('')) + parseInt(l2.reverse().join(''));
    var revNum= sum1.toString().split('').reverse().join('');
   return  Array.from(revNum)
//    return  revNum
};

let l1 = [2,4,3], l2 = [5,6,4];

console.log(addTwoNumbers(l1, l2));


