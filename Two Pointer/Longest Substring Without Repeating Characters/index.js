/*
Given a string s, find the length of the longest
substring
 without repeating characters.



Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
 */
function lengthOfLongestSubstring(s) { //two pointer
    let maxLength = 0; // Length of the longest substring
    let left = 0; // Left pointer
    let right = 0; // Right pointer
    const uniqueChars = new Set(); // Set to track unique characters

    while (right < s.length) {
        if (!uniqueChars.has(s[right])) {
            uniqueChars.add(s[right]);
            maxLength = Math.max(maxLength, right - left + 1);
            right++;
        } else {
            uniqueChars.delete(s[left]);
            left++;
        }
    }

    return maxLength;
}
1234

function lengthOfLongestSubstring(s) { // sliding window technique
    const n = s.length;
    const set = new Set();
    let maxLength = 0;
    let left = 0;
    let right = 0;

    while (right < n) {
        if (!set.has(s[right])) {
            set.add(s[right]);
            maxLength = Math.max(maxLength, right - left + 1);
            right++;
        } else {
            set.delete(s[left]);
            left++;
        }
    }

    return maxLength;
}

