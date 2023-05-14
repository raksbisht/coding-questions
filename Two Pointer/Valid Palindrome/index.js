/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
 it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

    Example 1:
        Input: s = "A man, a plan, a canal: Panama"
        Output: true
        Explanation: "amanaplanacanalpanama" is a palindrome.


    Example 2 :
        Input: s = "race a car"
        Output: false
        Explanation: "raceacar" is not a palindrome.

    Example 3:

    Input: s = " "
    Output: true
    Explanation: s is an empty string "" after removing non-alphanumeric characters.
    Since an empty string reads the same forward and backward, it is a palindrome.

Paytm
Zoho
Morgan Stanley
Amazon
D-E-Shaw
FactSet
Cisco
Facebook
 */
// TWO POINTER APPROACH


function isPalindrome(s) {
    // Preprocess the input string
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Use the two pointer approach
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}



function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check if the string is empty or has only one character
    if (str.length === 0 || str.length === 1) {
        return true;
    }

    // Check if the first and last characters of the string match
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }

    // If we made it here, the string is a palindrome
    return true;
}

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();

    // Compare the original string to its reverse
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
