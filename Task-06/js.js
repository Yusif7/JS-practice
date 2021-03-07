const calcmulti = (x,y) =>{
    return x*y
}
const caldiv = (x,y) => {
    return x/2
}
let input = prompt('Select your opration 1 - multiple 2 - divide : ')

if (input == 1){
    let num1 = prompt('Enter first number: ');
    let num2 = prompt('Enter second number: ')
    document.write('Result of multiple: ' + calcmulti(num1,num2));
}
else if (input == 2){
    let num1 = prompt('Enter first number: ');
    let num2 = prompt('Enter second number: ')
    document.write('Result of multiple: ' + caldiv(num1, num2))
}
else{
    alert('Incorect input. Try again...')
    
}