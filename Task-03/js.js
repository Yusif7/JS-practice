const p = (a,b,c) => {
    return (a+b+c)/2
}
const triangle = (x,y,z) => {
    return Math.sqrt(p(x,y,z)*(p(x,y,z)-x)*(p(x,y,z)-y)*(p(x,y,z)-z))
}
document.write(
    `
    Answer:${triangle(5,6,7)}
    `
)