/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
    Input: s = "leetcode"
    Output: 0
Example 2:
    Input: s = "loveleetcode"
    Output: 2
Example 3:
    Input: s = "aabb"
    Output: -1
 */

function firstUniqueChar(str) {
    const charCount = new Map();

    // Populate the hash map with character frequencies
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Find the first unique character
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charCount.get(char) === 1) {
            return char;
        }
    }

    // No unique character found
    return null;
}


const input = "abccdeff";
const firstUnique = firstUniqueChar(input);

console.log(firstUnique);  // Output: "a"
