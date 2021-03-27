let str = '025468';
let strArr = [...str]
let result = '';
for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] % 2 == 0 && strArr[i + 1] % 2 == 0) {
        result += strArr[i] + '-'
    } else {
        result += strArr[i]
    }
}
console.log(result)