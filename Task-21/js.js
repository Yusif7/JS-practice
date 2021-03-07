let alphabet = 'abcdefghijklmnopqrstuvwxyz'
let word = 'yusif'
let k = 0
for(let i = 0; i < word.length; i++){
    for(let j = 0; j < alphabet.length; j++){
        if (word[i] == alphabet[j]){
            document.write(alphabet[j+1])
        }
    }
}