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
    let result=0;
    while(x>0){
        let lastDigit=x%10;
        result=result*10+lastDigit;
        x=Math.floor(x/10);
        console.log(x)
    }
    return result;
}
const num = 12345;
const reversedNum = reverseInteger(num);

console.log(reversedNum);  // Output: 54321
