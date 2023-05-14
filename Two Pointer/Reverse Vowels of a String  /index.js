/*
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:

    Input: s = "hello"
    Output: "holle"

Example 2:

    Input: s = "leetcode"
    Output: "leotcede"

 */
function reverseVowels(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const chars = s.split('');
    let left = 0;
    let right = chars.length - 1;

    while (left < right) {
        if (vowels.has(chars[left]) && vowels.has(chars[right])) {
            // Swap the vowels
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            right--;
        } else if (vowels.has(chars[left])) {
            right--;
        } else {
            left++;
        }
    }

    return chars.join('');
}
console.log(reverseVowels('hello'));
