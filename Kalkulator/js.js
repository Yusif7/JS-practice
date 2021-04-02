/* Create board */
let operations = document.createElement('div')
operations.classList.add('operations')

document.querySelector('body').appendChild(operations)

let operationArray = ['+', '-', '*', '/']

for (let i = 0; i < 4; i++) {
    let a = document.createElement('div')
    a.classList.add('operation')
    a.innerHTML = operationArray[i]
    operations.appendChild(a)
}

/* Create numbers board */
let numbers = document.createElement('div')
numbers.classList.add('numbers')
document.querySelector('body').appendChild(numbers)

for (let i = 0; i <= 9; i++) {
    let num = document.createElement('div')
    num.classList.add('num')
    num.innerHTML = i
    numbers.appendChild(num)
}

const defineNumbers = () => {
    let num = ''
    let arr = []
    let k = 0
    document.querySelector('body').addEventListener('click', (e) => {
        if (e.target.innerHTML >= 0 && e.target.innerHTML <= 9) {
            num += e.target.innerHTML
            arr[k] = Number(num)
            document.querySelector('.num1').innerHTML = arr[0]
            document.querySelector('.num2').innerHTML = arr[1]
        } else {
            if (arr.length == 2) {
                return arr
            }
            arr[k++]
            num = ''
        }
    })
    return arr
}

let arr = defineNumbers()

const checkOperation = (e, a, b) => {
    if (e == '+') {
        return a + b
    } else if (e == '-') {
        return a - b
    } else if (e == '*') {
        return a * b
    } else {
        if (b == 0) {
            return 0
        }
        return a / b
    }
}

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.innerHTML == '+' && arr[1] !== undefined) {
        document.querySelector('.result').innerHTML = String(checkOperation(e.target.innerHTML, arr[0], arr[1]))
    } else if (e.target.innerHTML == '-' && arr[1] !== undefined) {
        document.querySelector('.result').innerHTML = checkOperation(e.target.innerHTML, arr[0], arr[1])
    } else if (e.target.innerHTML == '*' && arr[1] !== undefined) {
        document.querySelector('.result').innerHTML = checkOperation(e.target.innerHTML, arr[0], arr[1])
    } else if (e.target.innerHTML == '/' && arr[1] !== undefined) {
        document.querySelector('.result').innerHTML = checkOperation(e.target.innerHTML, arr[0], arr[1])
    }
})