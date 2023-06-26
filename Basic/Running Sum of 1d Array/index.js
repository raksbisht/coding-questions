/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

    Example 1:

        Input: nums = [1,2,3,4]
        Output: [1,3,6,10]
        Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
    Example 2:

        Input: nums = [1,1,1,1,1]
        Output: [1,2,3,4,5]
        Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
    Example 3:

        Input: nums = [3,1,2,10,1]
        Output: [3,4,6,16,17]
 */


//My Solution
var runningSum = function(nums) {
    const newArray=[];

    for(let i=0; i< nums.length ; i++){
        let currSum=nums[i];
        if(i>0){
            for(j=i-1; j>=0 ; j--){
                currSum=currSum + nums[j]
            }
            newArray.push(currSum);
        }else{
            newArray.push(nums[i]);
        }
    }

    return newArray;

};





// TODO: Optimized  solution

var runningSum = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1]; // Update each element by adding the previous running sum
    }

    return nums;
};


// TODO: Best solution
var runningSum = function(nums) {
    const newArray = [nums[0]]; // Initialize the newArray with the first element of nums
    let sum = nums[0]; // Initialize the sum with the first element of nums

    for (let i = 1; i < nums.length; i++) {
        sum += nums[i]; // Add the current element to the sum
        newArray.push(sum); // Push the updated sum to the newArray
    }

    return newArray;
};

console.log(runningSum([1,2,3,4]))
