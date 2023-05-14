


function twoSum(nums, target) {
    const map = new Map(); // Map to store the number and its index
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]; // Found a pair, return the indices
        }
        map.set(nums[i], i); // Store the current number and its index
    }
    return []; // No valid pair found
}
