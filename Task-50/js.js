let arr = [1, 2, 5, 3, 4, 5, 6, 23]

const replaceHalf = (arr) => {
    if (arr.length % 2 !== 0) {
        return false
    }
    let index = arr.length / 2;
    let part1 = arr.slice(0, index);
    let part2 = arr.slice(index)
    return part2 + ',' + part1
}
console.log(replaceHalf(arr))