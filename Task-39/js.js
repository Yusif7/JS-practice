let num = '9582';
const slice = (num, start = 0, end = num.length) => {
    let result = ''
    for (let i = start; i < start + end; i++) {
        if (num[i] == undefined) {
            continue
        }
        result += num[i]
    }
    return result
}

const connectParts = (num, start, end) => {
    let part1 = slice(num, start, end)
    let part2 = slice(num, end + 1)
    return part1 + part2
}

const push = (arr, elem) => {
    arr[arr.length] = elem
    return arr
}

const positive = (num) => {
    let result = []
    let max = 0
    for (let i = 0; i < num.length; i++) {
        push(result, connectParts(num, 0, i))
        if (max < result[i]) {
            max = result[i]
        }
    }
    return max
}


console.log(positive(num))

/* 
const num = '9582';
const numbers = [];

const cut = (num, index) => {
    const part1 = num.slice(0, index);
    const part2 = num.slice(index + 1);
    return part1 + part2;
}

console.log(cut(num, 1))

for (let i = 0; i < num.length; i++) {
    numbers.push(Number(cut(num, i)));
}
console.log(numbers) */