const check = (str, find) => {
    let findLen = find.length;
    let start = str.length - findLen
    let j = 0
    for(let i = start; i < str.length; i++){
        if(find[j++] == str[i]){
            return true
        }
    }
    return false
}
console.log(check('Javascript', 'fcript'))