let arr = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
]

const nestedLoop = (arr) => {
    let row = ''
    let value = ''
    let result = ''
    for (let i = 0; i < arr.length; i++) {
        row = 'Row ' + i + '\n'
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == undefined) {
                continue
            }
            value += arr[i][j] + '\n'
        }
        result += row + value
        value = ''
    }
    return result
}

console.log(nestedLoop(arr))