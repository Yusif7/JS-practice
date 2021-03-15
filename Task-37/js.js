let a = [4, 3, 2, 1]
let temp = ''
for (let i = 0; i < a.length - 1; i++) {
    if (a[i] > a[i + 1]) {
        temp = a[i + 1]
        a[i + 1] = a[i]
        a[i] = temp
    }
}