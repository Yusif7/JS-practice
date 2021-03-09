let arr = [1, 2, 3, 14, 5];


const sum2Elem = (arr) =>{
    let max = 0
    for(let i = 0; i <arr.length; i++){
        if(arr[i] + arr[i+1] > max){
            max =arr[i] + arr[i+1]
        }
    }
    return max
}
console.log(sum2Elem(arr))