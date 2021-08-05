"use strict"

const bg = document.querySelector('body')
const btn = document.querySelector('.btn')
const head = document.querySelector('h1')

btn.addEventListener('click',function(){
    let randomColor = getRandomColor()
    bg.style.backgroundColor = randomColor
    head.innerText = randomColor
})

function getRandomColor() {
    let num = Math.floor(Math.random() * 256)
    let num1 = Math.floor(Math.random() * 256)
    let num2 = Math.floor(Math.random() * 256)

    return `rgb(${num},${num1},${num2})`
}