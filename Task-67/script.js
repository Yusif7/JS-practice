let arr = [678, 45, 67, 89, 23, 545, 188, 293]

const interval = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 100 && arr[i] <= 200) {
            count++
        }
    }
    return count
}

console.log(interval(arr))