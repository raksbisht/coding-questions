// Let's say we want to determine if an array is sorted in non-decreasing order.

function isSorted(nums) {
    let left = 0;                     // Pointer starting from the left end
    let right = nums.length - 1;      // Pointer starting from the right end

    while (left < right) {
        if (nums[left] > nums[right]) {
            return false;                 // Array is not sorted in non-decreasing order
        }

        left++;                         // Move the left pointer to the right
        right--;                        // Move the right pointer to the left
    }

    return true;                      // Array is sorted in non-decreasing order
}

console.log(isSorted([1, 2, 3, 4, 5]));
