/*
TODO: Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

    Example 1:
        Input: s = ["h","e","l","l","o"]
        Output: ["o","l","l","e","h"]

    Example 2:

        Input: s = ["H","a","n","n","a","h"]
        Output: ["h","a","n","n","a","H"]




Paytm
Accolite
Amazon
Microsoft
Samsung
MakeMyTrip
Goldman Sachs
Adobe
SAP Labs
Cisco
 */

// TODO: TWO POINTER APPROACH   /   i < string.length


function reverseString(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // swap left and right elements
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        console.log("ddddd")
        // move pointers inward
        left++;
        right--;
    }
}
function reverseString1(s) {
    let left = 0;
    for(let i=0; i < s.length/2 ; i++){
        console.log("ddddd")

        const temp = s[i];
        const right=(s.length-1)-i;
        s[i] = s[right];
        s[right] = temp;

    }
}
const s1 = ["h","e","l","l","o"];
reverseString(s1);
console.log(s1); // ["o","l","l","e","h"]

const s2 = ["H","a","n","n","a","h"];
reverseString(s2);
console.log(s2); // ["h","a","n","n","a","H"]


// TODO : SOLVED IN LEETCODE
