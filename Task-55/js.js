let str = 'Web Development Tutorial '



const convertToArray = (str) => {
    let result = '';
    let array = [];
    for (let i = 0; i <= str.length - 1; i++) {
        if ((str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= 'a' && str[i] <= 'z')) {
            result += str[i]
        } else {
            array.push(result)
            result = ''
            continue
        }
    }
    return array
}

let array = convertToArray(str)

const longestWord = (array) => {
    let max = 0;
    let result = ''
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > max) {
            max = array[i].length
            result = array[i]
        }
    }
    return result
}

console.log(longestWord(array))