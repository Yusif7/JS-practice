let str1 = 'fidan'
let str2 = 'fi'
let result = ''
if (str1.length > str2.length){
    for(let i = (str1.length - str2.length); i <str1.length; i++){
        result += str1[i]
    }
    console.log(result + str2)
}
else if(str1.length === str2.length){
    console.log(str1+str2)
}
else{
    for (let i = (str2.length - str1.length); i < str2.length; i++){
        result += str2
    }
    console.log(str1 + result)
}