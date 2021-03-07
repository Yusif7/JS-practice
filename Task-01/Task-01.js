let date = new Date()
let weekDay = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"]
document.write(
    `
    1.Напишите программу на JavaScript для отображения текущего дня и времени в следующем формате.
    Сегодня вторник.
    Текущее время: 22:00: 30: 38<br>
    Today is ${weekDay[date.getDay()]}<br>
    Time is ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
    `)