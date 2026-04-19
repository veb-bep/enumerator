const elBtn1 = document.querySelector ('.btn1')
const elBtn2 = document.querySelector ('.btn2')
const elSpan = document.querySelector ('.span')
const elText = document.querySelector ('.text')

let x = 0

elBtn1.addEventListener ('click', () => {
    elText.innerHTML = `Sanash tugmasi <span class="span">${++x}</span> marta bosildi`
})
elBtn2.addEventListener ('click', () => {
    x = 0
    elText.textContent = "Tozalandi"
})