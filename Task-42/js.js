let str = '1789'
const increase = (str) => {
    let result = ''
    for (let i = 0; i <= str.length; i++) {
        if (str[i] < str[i + 1]) {
            result += str[i]
            if (str[i] < str[i + 1] && str[i + 1] == str[str.length - 1]) {
                result += str[i + 1]
            }
        }
    }
    if (result.length == str.length) {
        return result
    }
    return false
}

console.log(increase(str))