let arr = [1, 22, 32, 54, 50];

const lastElem = (elem) => {
    let str = String(elem)
    if (str[str.length - 1] == 0) {
        return true
    }
    return false
}

const roundNumber = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (lastElem(arr[i])) {
            return i
        }
    }
    return 0
}
console.log(roundNumber(arr))