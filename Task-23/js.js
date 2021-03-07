const cut = (str,num) => {
    let len = str.length - num
    let result = ''
    for(let i = len; i < str.length; i++){
        result += str[i]
    }
    return result
}

let word = 'Javascript';
let num = 3
console.log(cut(word, num) + word)