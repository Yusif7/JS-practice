let arr = [1, 4, 56, 23, 67, 89, 145, 89, 200, 35];

/*
verilən massivə əsasən elə bir funksiya (tək funksiya) yazın ki o funksiya sayəsində aşağıdakı filterləmə əməlyatlarını asanlıqla aparıla bilsin
cüt ədədləri tapsın
tək ədədlər tapsın
rəqəmlərinin cəmi 10-dan kiçik olanları tapsın
2 rəqəmli ədədləri tapsın
*/

let result = [];
const sumFunc = (num, result) => {
    let count = 0;
    let str = String(num);
    for (let i = 0; i < str.length; i++) {
        let numstr = Number(str[i]);
        count += numstr
    }
    if (count < 10) {
        result.push(num)
    }
    return result
}

/* let summma = sumFunc(65, result)
console.log(summma); */


const numFunc = (arr, text) => {
    let result = []
    if (text == 'double') {
        for (let i = 0; i < arr.length; i++) {
            if (String(arr[i]).length > 1) {
                result.push(arr[i])
            }
        }
        return result
    } else if (text == 'single') {
        for (let i = 0; i < arr.length; i++) {
            if (String(arr[i]).length == 1) {
                result.push(arr[i])
            }
        }
        return result
    } else if (text == 'sum') {
        for (let i = 0; i < arr.length; i++) {
            if (String(arr[i]).length > 1) {
                sumFunc(arr[i], result);
            }
        }
        return result;
    }
}

let double = numFunc(arr, 'double');
let single = numFunc(arr, 'single');
let sum = numFunc(arr, 'sum');
console.log(double, single, sum);