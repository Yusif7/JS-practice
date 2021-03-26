let arr = [4, 3, 2, 1, 5, 7]
const sort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return [
        arr[1],
        arr[arr.length - 2]
    ]
}

const sort1 = (arr) => {
    if (arr.length < 2) {
        return arr
    }
    let middle = Math.floor(arr.length / 2);
    let current = arr[middle];
    let less = [];
    let more = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == current) {
            continue
        }
        if (arr[i] < current) {
            less.push(arr[i])
        } else {
            more.push(arr[i])
        }
    }
    return [
        ...sort1(less),
        current,
        ...sort1(more)
    ]
}