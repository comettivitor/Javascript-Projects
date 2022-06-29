const res = document.querySelector('#results')
const btn = document.querySelector('.btn')
const url = 'https://api.adviceslip.com/advice'

btn.addEventListener('click', () => {
    getAdvice()
})

window.onload = () =>{
    getAdvice()
}


function getAdvice(){
fetch(url)
.then(response => {
    return response.json()
}).then(advData =>{
    const advObj = advData.slip
    res.innerHTML = 
    `
    <h1>${advObj.advice}</h1>
    <p>${advObj.id}</p>
    `
}).catch(error =>{
    console.log(error)
})
}