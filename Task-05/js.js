let ran = Math.floor(Math.random() * (10 - 1)) + 1;
let input = Math.floor(Math.random() * (10 - 1)) + 1;
if (input <= 0 || input > 10){
    document.write('Incorrect input')
}
else if(input  == ran){
    document.write('Correct')
}
else{
    document.write('Error')
}