let inp = Number(prompt('Enter the number: '));
if (inp < 20){
    document.write('Incorrect input')
}
else if (inp >= 20 && inp <= 100){
    document.write('Number between 20 and 100')
}
else if(inp<=400){
    document.write('Number between 100 and 400')
}