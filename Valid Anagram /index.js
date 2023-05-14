/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

   Example 1:=
        Input: s = "anagram", t = "nagaram"
        Output: true

    Example 2:
        Input: s = "rat", t = "car"
        Output: false
Flipkart
Directi
Adobe
Google
Nagarro
Media.net
 */

function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sCounts = {};
    const tCounts = {};

    // count characters in s and t
    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];
        sCounts[sChar] = (sCounts[sChar] || 0) + 1;
        tCounts[tChar] = (tCounts[tChar] || 0) + 1;
    }

    // compare counts
    for (const char in sCounts) {
        if (sCounts[char] !== tCounts[char]) {
            return false;
        }
    }

    return true;
}


function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const count = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        count[char] = (count[char] || 0) + 1;
    }

    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        console.log(char,count[char])
        if (!count[char]) {
            return false;
        }
        count[char]--;
        console.log( count[char]);
    }

    return true;
}

console.log(isAnagram('anagram','nagaram'));
// console.log(isAnagram('rat','car'));
// console.log(isAnagram('SFSDF','SDFSD'));
