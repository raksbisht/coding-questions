const authors = ["John Smith", "Jane Doe", "Mark Johnson", "Alice Brown"];
authors.sort(function (a, b) {
    let lastnamea=a.split(" ")[1];
    let lastnameb=b.split(" ")[1];
    if (lastnamea < lastnameb) {
        return -1;
    }
    if (lastnamea > lastnameb) {
        return 1;
    }
    return 0;
});

console.log(authors)
