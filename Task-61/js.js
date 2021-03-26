let str = 'The quick brown fox jumps over the lazy dog';

const include = (elem, arr, start = 0) => {
    let count = 0;
    for (let i = start; i < arr.length; i++) {
        if (elem === arr[i]) {
            count++
        }
    }
    return [
        elem,
        count
    ]
}

const letterCount = (elem) => {
    let obj = {
        result: [],
    }
    let arr = []
    for (let i = 0; i < elem.length; i++) {
        if (arr.includes(elem[i])) {
            continue
        }
        if (elem[i] == ' ') {
            continue
        }
        obj.result.push(include(elem[i], elem, i))
        arr.push(elem[i])
    }
    return obj
}
console.log(letterCount(str))