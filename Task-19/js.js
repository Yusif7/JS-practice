const lastNum = (x) => {
    let str = String(x)
    for (let i = 0; i < str.length; i++ ){
        if(i == (str.length-1)){
            return Number(str[i])
            
        }
    }
}
const equality = (a,b,c) => {
    if (lastNum(a) == lastNum(b)&& lastNum(a)==lastNum(c)){
        return true
    }
    return false
}
document.write(equality(50,70,95))