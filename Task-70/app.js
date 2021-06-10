let array = [1, 3, 5, 6, undefined, null, true, {}, 34, 'FrontEndMasters', 'BackEndMAsters'];
const numArray = (arr) => {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i]) && typeof arr[i] !== 'boolean' && arr[i] !== null) {
            newArray.push(arr[i])
        }
    }
    return newArray
}

let arrayNew = numArray(array);
console.log(arrayNew);


const convert = (arr) => {
    let arrNew = []
    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);
        if (!isNaN(num)) {
            arrNew.push(num)
        }
    }
    return arrNew
}

let arrayNew1 = convert(array);
console.log(arrayNew1);

const separateType = (arr) => {
    let bool = [];
    let num = [];
    let str = [];
    let other = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'boolean') {
            bool.push(arr[i])
        } else if (typeof arr[i] == 'string') {
            str.push(arr[i])
        } else if (typeof arr[i] == 'number') {
            num.push(arr[i])
        } else {
            other.push(arr[i])
        }
    }
    return [
        bool,
        num,
        str,
        other
    ]
}

let sepArr = separateType(array);
console.log(sepArr);


const indexChange = (arr) => {
    for (let i = 0; i < arr.length; i += 2) {
        let test = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = test;
    }
    return arr
}
let indexChangeArr = indexChange(array);
console.log(indexChangeArr);


const letterFind = (arr) => {
    let arrMain = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
    let obj = {
        vowel: 0,
        consonants: 0
    };
    let vowelCount = 0;
    let consonantsCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'string') {
            for (let k = 0; k < arr[i].length; k++) {
                if (arrMain.includes(arr[i][k])) {
                    vowelCount++;
                    obj.vowel = vowelCount;
                } else {
                    consonantsCount++;
                    obj.consonants = consonantsCount;
                }
            }
        }
    }
    return obj
}

let letterFindObj = letterFind(array);
console.log(letterFindObj);