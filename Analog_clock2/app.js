let block = document.querySelector('.block');
let rotate = 0;
let text = '|';
for (let i = 0; i <= 60; i++) {
    let span = document.createElement('div')
    span.classList.add('arrow');
    span.textContent = text;
    span.style.transform = `rotate(${rotate}deg)`
    block.appendChild(span)
    rotate += 6;
}