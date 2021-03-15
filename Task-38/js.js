let word = 'XXyx';
const uppercase = (elem) => {
    if (elem >= 'A' && elem <= 'Z') {
        return true
    }
    return false
}
const lowercase = (elem) => {
    if (elem >= 'a' && elem <= 'z') {
        return true
    }
    return false
}

const latin = (word) => {
    let count = 0
    for (let i = 0; i < word.length; i++) {
        if ((uppercase(word[i]) == true && word[i] == word[i + 1]) || (lowercase(word[i]) == true && word[i] == word[i + 1])) {
            count++
        }
    }
    if (count == 0) {
        return true
    }
    return false
}

console.log(latin(word))