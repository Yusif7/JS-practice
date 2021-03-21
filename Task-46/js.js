let str = 'ab$cabc';
const convertToArray = (str) => {
    let result = []
    for (let i = 0; i < str.length; i++) {
        result.push(str[i])
    }
    return result
}

const findNumber = (elem) => {
    let num = Number(elem);
    if (num >= 0 && num <= 9) {
        return true
    }
    return false
}

const replaceNumber = (str) => {
    let array = convertToArray(str)
    let result = ''
    for (let i = 0; i < array.length; i++) {
        if (findNumber(array[i])) {
            array[i] = '$'
        }
        result += array[i]
    }
    return result
}

console.log(replaceNumber(str))