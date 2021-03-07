let date = new Date()
let year = date.getFullYear()
if (year % 4 == 0){
    document.write(
        `
        Visokosniy god
        `
    )
}
else{
    document.write(
        `
        God ne visokosniy
        `
    )
}