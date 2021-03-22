let arr = ["xyz", "acd", "aa", "bb", "zzz", "", "a", "b"]

const sort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j].length > arr[j + 1].length) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(sort(arr))