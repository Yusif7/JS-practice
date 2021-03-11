let arr = [2, 2, 3, 3, 4, 6, 2, 8, 8, 8, 8, 8, 8, 8, 8]
const slice = (start, arr, end = arr.length) => {
    let part1 = ''
    let k = 0
    for (let i = start; i < start + end; i++) {
        part1 += arr[i]
    }
    return part1
}


const check = (arr, n) => {
    let count = 1
    let max = 0
    let obj = { repeateCount: 0, value: '' }
    for (let i = 0; i < arr.length; i += n) {
        if (slice(i, arr, n) == undefined || slice(i + n, arr, n) == undefined) {
            break
        }
        if (slice(i, arr, n) == slice(i + n, arr, n)) {
            count++
            if (max < count) {
                max = count
                obj.repeateCount = max
                obj.value = arr[i]
            }
        } else {
            count = 1
        }
    }
    return obj
}
console.log(check(arr, 2))