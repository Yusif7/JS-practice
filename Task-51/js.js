let arr = [1, 2, 3, 4, 5] // [2,1,4,3]

const swap = (arr) => {
    if (arr.length % 2 !== 0) {
        return false
    }
    for (let i = 0; i < arr.length; i += 2) {
        let temp = arr[i + 1]
        arr[i + 1] = arr[i]
        arr[i] = temp
    }
    return arr
}

console.log(swap(arr))