let str = 'Javascript';
let find = 'a'
let count = 0
for (let i = 0; i < str.length; i++){
    if(str[i] == find){
        count += 1
        console.log(i)
    }
}
console.log(count)