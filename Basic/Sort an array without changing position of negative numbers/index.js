function sortArrayWithNegatives(arr) {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                if (arr[j] >= 0 && arr[j + 1] >= 0) {
                    // Swap positive numbers
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
    }

    return arr;
}

// Example usage
const arr = [4, -1, 5, -2, -9, 10, 12, -3];
const sortedArr = sortArrayWithNegatives(arr);
console.log(sortedArr);
