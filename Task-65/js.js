let str = 'The Quick Brown Fox'

const letterCase = (str) => {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            result += str[i].toLowerCase()
        } else {
            result += str[i].toUpperCase()
        }
    }
    return result
}