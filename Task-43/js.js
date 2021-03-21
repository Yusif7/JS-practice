let str = '1020'
const findEvenDigit = (str) => {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] % 2 === 0) {
            count++
        }
    }
    return count
}

console.log(findEvenDigit(str))