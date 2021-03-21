let str = '4*2'
const findSymbol = (num) => {
    for (let i = 0; i < num.length; i++) {
        if (num[i] == '*') {
            return i
        }
    }
}

const getAllNumbers = (str) => {
    let arr = []
    let index = findSymbol(str)
    for (let i = 0; i < 10; i++) {
        arr[arr.length] = str.slice(0, index) + i + str.slice(index + 1)
    }
    return arr
}


let numbers = getAllNumbers(str)
let result = []
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 == 0) {
        result.push(numbers[i])
    }
}

console.log(result)