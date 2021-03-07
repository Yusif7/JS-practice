let a = 222;
let b = 911;
const convertToArray = (a) => {
    let str = String(a)
    let result = []    
    for(let i = 0; i < str.length; i++){
        result[i] = str[i]
    }
    return result
}
let result = ''
const sum = (a,b) => {
    let arrayA = convertToArray(a)
    let arrayB = convertToArray(b)
    for(let i = 0; i < arrayA.length; i++){
        if((Number(arrayA[i]) + Number(arrayB[i])) >= 10){
            let add = Number(arrayA[i]) + Number(arrayB[i])
            let strAdd = String(add)
            let strAdd1 = strAdd[0]
            let num = Number(strAdd1)
            result += num
            continue
        }
        result += Number(arrayA[i]) + Number(arrayB[i])
    }
    return result
}

console.log(sum(200,900))