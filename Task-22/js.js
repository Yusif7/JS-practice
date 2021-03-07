let num = 767;
let hour = 0;
let minute = 0;
while(num > 0){
    if (num%60 == 0){
        hour = num/60
        break
    }
    minute++
    num--
}
document.write(hour + ' hour ' + minute + ' minutes')