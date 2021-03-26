let str = 'thequickbrownfxjmpsvlazydg';

let res = '';
for (let i = 0; i < str.length; i++) {
    for (let j = str.length; j >= i; j--) {
        if (res.includes(str[i])) {
            continue
        }
        if (str[i] === str[j]) {
            continue
        }
        res += str[i]
    }
}
console.log(res)