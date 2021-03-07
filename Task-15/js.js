let str = 'Swift';
if(str.length < 3){
    console.log('Incorrect input')
}
else{
    document.write(str.slice(-3) + str + str.slice(-3))
}