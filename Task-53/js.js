let str = 'dog'
const allCombinations = (str) => {
    let result = '';
    let result1 = '';
    let part = '';
    let part1 = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            result += str.slice(i, j) + ','
        }
    }
    for (let i = 0; i < str.length; i++) {
        part = str.slice(0, i);
        part1 = str.slice(i + 1)
        if (result.includes(part + part1)) {
            continue
        }
        if (part1 == str[str.length - 1]) {
            result1 += part + part1
            break
        }
        result1 += part + part1 + ','
    }

    result += result1
    return result
}