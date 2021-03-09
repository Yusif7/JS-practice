let array = ['d','c','b','a'] // Sort with bubble sort

const bubbleSort = (array) => {
    for(let i = 0; i < array.length-1; i++){
        for(let j = 0;j < array.length-1; j++){
            if(array[j+1] < array[j]){
                let temp = array[j+1] // temp = her muqaise olunan bir sonraki elemente beraber olmalidir
                array[j+1] = array[j] // sonra ki elementin deyerini daha yuksek olan elementle evez edirik
                array[j] = temp // muqaise olunan elementin deyerinini teyin edirik
            }
        }
    }
    return array
}


let arr = [10,20,30];
let arr1 = [30,10,20];

const check = (a,b) =>{
    let array = bubbleSort(a)
    let array1 = bubbleSort(b)
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array1.length;j++){
            if(array[j] == array1[j]){
                return true
            }
        }
    }
}

console.log(check(arr,arr1))