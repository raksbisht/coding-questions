/*
Let's say we want to find the pair of numbers in a SORTED array that sums up to a given target value.

 */

function twoSum(nums, target) {
    let left = 0;                           // Pointer starting from the left end
    let right = nums.length - 1;            // Pointer starting from the right end

    while (left < right) {
        const sum = nums[left] + nums[right];
        console.log(nums[left] , nums[right])
        if (sum === target) {
            return [nums[left], nums[right]];   // Found the pair that sums up to the target
        } else if (sum < target) {
            left++;                             // Move the left pointer to the right
        } else {
            right--;                            // Move the right pointer to the left
        }

    }

    return [];                              // No pair found that sums up to the target
}


console.log(twoSum([2, 7, 12, 16], 19));



/*
Container With Most Water:
Two Sum
Three Sum:
Remove Duplicates from Sorted Array
Longest Substring Without Repeating Characters
 */
