let arr = [5,2,6,7,8,12,4,9]
let max = 0;
for (let i = 0; i < arr.length; i++){
    if (arr[i] > max){
        max = arr[i]
    }
}
document.write(max)