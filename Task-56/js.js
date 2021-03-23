let str = 'the quick brown fox';

const checkLetter = (elem) => {
    if ((elem >= 'a' && elem <= 'z') || (elem >= 'A' && elem <= 'Z')) {
        return true
    }
    return false
}


const capitalize = (str) => {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (checkLetter(str[i]) == true && checkLetter(str[i + 1]) == true && checkLetter(str[i - 1]) == false) {
            result += str[i].toLocaleUpperCase();
            continue
        }
        result += str[i]
    }
    return result
}