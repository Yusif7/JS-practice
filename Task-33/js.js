let arr = [1,2,4,1,2,3,5,2,6,7,3,3]

const include = (arr, elem) => {
    for(let i = 0; i < arr.length; i++){
        if(elem == arr[i]){
            return true
        }
    }
    return false
}

const duplicate = (arr) => {
    let result = ''
    for (let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++ ){
            if(include(result, arr[i])){
                continue
            }
            if(arr[i] === arr[j]){
                result += arr[i]
            }
        }
    }
    return result
}
console.log(duplicate(arr))