let arr = [1, 2, 3, 18, 9]

const sort = (arr) => {
    if (arr.length < 2) {
        return arr
    }
    let floor = Math.floor(arr.length / 2)
    let less = []
    let more = []
    let current = arr[floor]
    for (let i = 0; i < arr.length; i++) {
        if (i === floor) {
            continue
        }
        if (arr[i] < arr[floor]) {
            less.push(arr[i])
        } else {
            more.push(arr[i])
        }
    }
    return [
        ...sort(less),
        current,
        ...sort(more)
    ]
}


let array = sort(arr)

console.log(array[array.length - 1] - array[0])