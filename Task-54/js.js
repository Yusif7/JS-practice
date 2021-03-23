let str = 'webmaster'
const convertToArray = (str) => {
    let array = []
    for (let i = 0; i < str.length; i++) {
        array.push(str[i])
    }
    return array
}

const sort = (str) => {
    let array = convertToArray(str)
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp
            }
        }
    }
    return array
}

console.log(sort(str))