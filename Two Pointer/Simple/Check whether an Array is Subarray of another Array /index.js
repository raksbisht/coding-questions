function isSubarray(subarray, array) {
    let i = 0; // Pointer for subarray
    let j = 0; // Pointer for array

    // Iterate through both arrays
    while (i < subarray.length && j < array.length) {
        // If the current elements match, move both pointers
        if (subarray[i] === array[j]) {
            i++;
        }
        j++;
    }

    // If all elements of the subarray have been matched, it is a subarray
    return i === subarray.length;
}

// Example usage
const array = [1, 2, 3, 4, 5, 6, 7];
const subarray1 = [3, 4, 5];
const subarray2 = [6, 7, 8];
const subarray3 = [2, 2, 2];

console.log(isSubarray(subarray1, array)); // Output: true
console.log(isSubarray(subarray2, array)); // Output: false
console.log(isSubarray(subarray3, array)); // Output: false
