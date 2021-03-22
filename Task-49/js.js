let str = 'w3resource';
const findNumber = (str) => {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (Number(str[i]) >= 0 && Number(str[i] <= 9)) {
            result += Number(str[i])
        }
    }
    return result
}

console.log(findNumber(str))