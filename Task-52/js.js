let num = 32243;
const reverse = (elem) => {
    let str = String(num);
    let result = ''
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}

console.log(reverse(num))