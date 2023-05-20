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
