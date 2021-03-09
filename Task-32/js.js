let arr = [1, 1, 2, 3, 2, 2, 2, 9, 4, 8, 8, 8, 8, 1];

const check = (arr) => {
    let count = 0
    let max = 0
    let obj = {count:0 , number: ''} // Tut nelza pisat 0 tak kak vnutri massiva mojet bit cifra 0
    for (let i = 0; i < arr.length; i++){
        if(arr[i] == arr[i+1]){
            count++
            if(count > max){
                max = count
                obj = {count:max , number: arr[i]}
            }
        }
        else{
            count = 1
        }
    }
    return obj
}
console.log(check(arr))