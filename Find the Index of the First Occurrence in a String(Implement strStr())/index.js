/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
    Input: haystack = "sadbutsad", needle = "sad"
    Output: 0
    Explanation: "sad" occurs at index 0 and 6.
    The first occurrence is at index 0, so we return 0.

Example 2:
    Input: haystack = "leetcode", needle = "leeto"
    Output: -1
    Explanation: "leeto" did not occur in "leetcode", so we return -1.
 */
function strStr(haystack, needle) {
    if (needle === '') {
        return 0;
    }

    const haystackLen = haystack.length;
    const needleLen = needle.length;

    for (let i = 0; i <= haystackLen - needleLen; i++) {
        let j;

        // Check if the current substring matches the needle
        for (j = 0; j < needleLen; j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }
        }

        // If the entire needle is found, return the starting index
        if (j === needleLen) {
            return i;
        }
    }

    // Needle not found
    return -1;
}

var strStr = function(haystack, needle) {
    let m = needle.length;
    let n = haystack.length;

    for (let windowStart = 0; windowStart <= n - m; windowStart++) {
        for (let i = 0; i < m; i++) {
            if (needle[i] != haystack[windowStart + i]) {
                break;
            }
            if (i == m - 1) {
                return windowStart;
            }
        }
    }

    return -1;
};

const haystack = "hello";
const needle = "ll";
const index = strStr(haystack, needle);

console.log(index);  // Output: 2
