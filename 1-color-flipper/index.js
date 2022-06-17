const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
const btn = document.getElementById("color-change")
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
    let colors = '#'
    for(let i = 0; i < 6; i++){
       colors += arr[getRandomNumber()]
    }
    color.textContent = colors
    document.body.style.backgroundColor = colors
})

function getRandomNumber(){
    return Math.floor(Math.random() * arr.length)
}