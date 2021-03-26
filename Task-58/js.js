let num = 28;
const perfectNum = (n) => {
    let arr = []
    let result = 0
    for (let i = n - 1; i >= 0; i--) {
        if (n % i == 0) {
            arr.push(i)
        }
    }
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    if (result === n) {
        return result
    }
    return false
}
console.log(perfectNum(num))