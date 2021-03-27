let str = 'google.com'
const nonRepeat = () => {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (result.includes(str[i])) {
                continue
            }
            if (str[i] == str[j]) {
                continue
            } else {
                result += str[i]
            }
        }
    }
    return result
}

console.log(nonRepeat(str))