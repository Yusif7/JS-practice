let arr = [1, 2, 3, 18, 9]

const difference = (arr) =>{
    let min = 0
    let  min1 = 0
    for(let i = 0; i <arr.length-1; i++){
        if(arr[i] - arr[i+1] < 0 && arr[i] - arr[i+1] < min){
            min = (arr[i] - arr[i+1])
        }
    }
    for(let j = 0; j < arr.length; j++){
        if(arr[j] - arr[j+1] > 0 && arr[j] - arr[j+1] > min){
            min1 = (arr[j] - arr[j+1])
            //console.log(min1)
        }
    }
    if(min < 0 && min*(-1) > min1)
    {
        return min*(-1)
    }    
    return min1
}
console.log(difference(arr))