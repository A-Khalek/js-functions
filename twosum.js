function twoSum(numbers, target){
    let i;
    let j;
    let outPut = [];
    for(i= 0; i<nums.length ; i++){
        for(j = i+1; j<nums.length; j++ ){
           var result=  nums[i] +  nums[j];
           if(result == target){
             outPut =[i,j];
           }
        }
    }

    return outPut;
    

}
let nums = [3,2,4], target = 6;

console.log(twoSum(nums, target));