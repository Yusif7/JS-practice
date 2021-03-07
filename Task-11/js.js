let a = 50;
let inp = Number(prompt('Enter first number: '));
let inp2 = Number(prompt('Enter second number: '));
if(inp == a || inp2 == a || (inp + inp2) == a){
    document.write(true)
}
else{
    document.write(false)
}