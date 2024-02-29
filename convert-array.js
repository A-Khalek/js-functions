
// convert an array like object into an array

let numbes = [1,2,3,4,5]
sum(...numbes);
function sum(){
    let arrayLikeObjects = arguments;
    // using Array.from
    let newAray = Array.from(arrayLikeObjects);
    console.log(newAray);

    // using spread syntex
    let speradArray =[...arrayLikeObjects];
    console.log(speradArray);

    // using Array.prototype.slice.call()
    let sliceArray = Array.prototype.slice.call(arrayLikeObjects);
    console.log(sliceArray);
}

