let num = 101;


const findPrime = (num) => {
    let result = []
    for (let i = 2; i <= num; i++) {
        if (num % i == 0) {
            if (i > 2 && i % 2 == 0) { // Eger ikiye bolunen ve ikiden yuksek reqem varsa onu nezere alma sadece 2 elave et
                continue
            }
            result[result.length] = i;
            num = num / i
        }
    }
    if (result.length > 0) {
        return result
    }
    return num
}
console.log(findPrime(num))