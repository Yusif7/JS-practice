const push = (arr, elem) => {
    arr[arr.length] = elem
    return arr
}

const floorNum = (arr) => {
    let result = arr.length / 2
    let num = ''
    for (let i = 0; i < result.length; i++) {
        if (result[i] == '.') {
            break
        } else {
            num = result[i]
        }
    }
    return Number(num)
}


const quickSort = (arr) => {
    if (arr < 2) {
        return arr
    }
    let floor = floorNum(arr)
    let less = []
    let more = []
    let current = arr[floor]
    for (let i = 0; i < arr.length; i++) {
        if (i === floor) {
            continue
        }
        if (arr[i] < arr[floor]) {
            push(less, arr[i])
        } else {
            push(more, arr[i])
        }
    }
    return [
        ...quickSort(less),
        current,
        ...quickSort(more)
    ]
}

let arr = [2, 3, 1, 6, 7, 12, 5, 4, 2, 3, 1, 6, 7, 14]
console.log(quickSort(arr))