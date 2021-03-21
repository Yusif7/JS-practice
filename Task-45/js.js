let str = 'python';

const convertToArray = (str) => {
    let result = []
    for (let i = 0; i < str.length; i++) {
        result[result.length] = str[i]
    }
    return result
}

let array = convertToArray(str)

const sort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j + 1]
                array[j + 1] = array[j]
                array[j] = temp
            }
        }
    }
    return array
}


const removeDuplicate = (arr) => {
    let array = convertToArray(arr)
    let sortedArray = sort(array)
    let result = []
    for (let i = 0; i <= sortedArray.length; i += 2) {
        if (i + 1 == sortedArray.length - 1 && sortedArray[i] !== sortedArray[i + 1]) {
            result[result.length] = sortedArray[i + 1]
        }
        if (sortedArray[i] == sortedArray[i + 1]) {
            continue
        } else {
            if (i == sortedArray.length - 1) {
                result[result.length] = sortedArray[i]
                continue
            }
            result[result.length] = sortedArray[i]
            result[result.length] = sortedArray[i + 1]
        }
    }
    if (result.length >= arr.length) {
        return arr
    }
    return result
}
console.log(removeDuplicate(str))