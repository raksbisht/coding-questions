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


const haystack = "hello";
const needle = "ll";
const index = strStr(haystack, needle);

console.log(index);  // Output: 2
