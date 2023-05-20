/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
    Input: x = 123
    Output: 321

Example 2:
    Input: x = -123
    Output: -321
Example 3:
    Input: x = 120
    Output: 21
 */
function reverseInteger(x) {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);

    let reversed = 0;
    let sign = 1;

    // Handle the sign
    if (x < 0) {
        sign = -1;
        x = Math.abs(x);
    }

    // Reverse the digits
    while (x > 0) {
        const digit = x % 10;
        reversed = (reversed * 10) + digit;

        // Check for overflow
        if (reversed > INT_MAX || reversed < INT_MIN) {
            return 0;
        }

        x = Math.floor(x / 10);
    }

    return reversed * sign;
}
const num = 12345;
const reversedNum = reverseInteger(num);

console.log(reversedNum);  // Output: 54321
