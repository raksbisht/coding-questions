const number=[1,2,-1,3,-9,-2];

function findThirdLargest(numbers) {
    if (numbers.length < 3) {
        return "Invalid input: Array should have at least 3 numbers.";
    }

    let first = 0
    let second = 0;
    let third = 0

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > first) {
            third = second;
            second = first;
            first = numbers[i];
        } else if (numbers[i] > second && numbers[i] !== first) {
            third = second;
            second = numbers[i];
        } else if (numbers[i] > third && numbers[i] !== second && numbers[i] !== first) {
            third = numbers[i];
        }
    }

    if (third === Number.NEGATIVE_INFINITY) {
        return "There are less than 3 unique numbers in the array.";
    }

    return third;
}

// Example usage:
const numbers = [1, 2, -1, 3, -9, -2];
const thirdLargest = findThirdLargest(numbers);
console.log(thirdLargest);
