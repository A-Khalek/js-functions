// for loop
const myList = ['bangladesh','India','Nepal','Bhutan'];
for(let i = 0; i<myList.length; i++){
    console.log(myList[i]);
}

// while loop
let i =0;
while(i<myList.length){
    console.log(myList[i]);
    i++;
}

let p = 0;
do{
    console.log(myList[p]);
    p++;
}while(p <myList.length);


// for of loop
// const myList = ['bangladesh','India','Nepal','Bhutan'];
for(var country of myList){
    // console.log(country);
}

const numberList = [100,200,36,144,258,254];
numberList.forEach(function(item){
    // console.log(item);
})



// for in looop
const person = {
    name :'Jaker Ali',
    age: 23,
    country : 'Bangladesh'
}
for( let key in person){
    // console.log(person[key]);
}


// object in foreach
const car = {
    name:'Tesla',
    model: 2023,
    color:'Black',
}
Object.values(car).forEach(values=>{
    console.log(values);
})