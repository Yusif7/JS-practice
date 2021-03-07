const compare = (sentence, start, end) => {
    let result = '';
    for (let i = start; i < end; i++) {
        result += sentence[i];
    }
    return result;
}

const check = (word, find) => {
    for (let i = 0; i < word.length; i++){
        if(find[0] === word[i]){
            if(find === compare(word, i,i+find.length)){
                return true
            }
        }
    }
    
    return false
}

let word = 'javascript';
let find = 'scrgpt';
console.log(check(word, find))