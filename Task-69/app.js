let input = prompt('Enter your name: ')

console.log(typeof input);

/* --------------------------- */

if (input.length > 0) {
    console.log('Full');
} else {
    console.log('empty');
}

/* -------------------------- */

const convert = (input) => {
    let num = Number(input);
    if (isNaN(num)) {
        return 'Enter numerical value'
    }
    return num * 2


}

let output = convert(input)
console.log(output);

/* -------------------------------- */