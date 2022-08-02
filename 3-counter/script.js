const btnDe = document.querySelector('#btnDe')
const btnRe = document.querySelector('#btnRe')
const btnIn = document.querySelector('#btnIn')
const divResult = document.querySelector('.results')

let count = 0

btnDe.addEventListener('click', function(e){
    if(e.target){
        count--
    }
    divResult.textContent = count
})

btnIn.addEventListener('click', function(e){
    if(e.target){
        count++
    }
    divResult.textContent = count
})

btnRe.addEventListener('click', function(e){
    if(e.target){
        count = 0
    }
    divResult.textContent = count
})