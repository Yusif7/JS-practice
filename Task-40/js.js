const sort = (arr) => {
    if (arr < 2) {
        return arr
    }
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

const numbers = (n) => {
    let arr = []
    for (let i = 2; i <= n; i++) {
        if (i == 2) {
            arr[arr.length] = i
            continue
        }
        if (i % 2 == 0) {
            continue
        }
        arr[arr.length] = i
    }
    return arr
}

console.log(numbers(5))