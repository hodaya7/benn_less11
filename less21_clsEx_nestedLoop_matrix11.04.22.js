var table = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
]
function sum(table) {
    var sum = 0;
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[0].length; j++) {
            sum += table[i][j];
        }
    }
    return sum;
}

console.log(sum(table));//16