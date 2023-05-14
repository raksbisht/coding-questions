/*
Substring Indexes
 */
function findSubstringIndices(str, substr) {
    const indices = [];
    let index = str.indexOf(substr);
    while (index !== -1) {
        indices.push(index);
        index = str.indexOf(substr, index + 1);
    }
    return indices;
}



