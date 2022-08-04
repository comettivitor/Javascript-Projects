const addButton = document.querySelector('.addButton');
const inputText = document.querySelector('.inputText');
const inputDate = document.querySelector('.inputDate')
const nullText = document.querySelector('.nullText')

var list = []

const addTask = () =>{
        if(inputText.value !== ''){
            list.push(inputText.value, inputDate.value)
            
            let task = document.createElement("div")
            task.innerText = `${inputText.value} \n Prazo: ${inputDate.value}\n`
            document.body.appendChild(task)
            task.classList.add('divTask')
            
            let editButton = document.createElement("button")
            editButton.innerHTML = 'edit'
            task.appendChild(editButton)
            editButton.setAttribute('id', 'editBtn')
            editButton.style.visibility = 'hidden'

            let deleteButton = document.createElement("button")
            deleteButton.innerHTML = 'Del'
            task.appendChild(deleteButton)
            deleteButton.setAttribute('id', 'delBtn')
            deleteButton.style.visibility = 'hidden'
            
            task.onmouseover = function(){showButton()}
            task.onmouseout = function(){hideButton()}

        }else{
            const message = document.createTextNode("Favor preencher o campo")
            nullText.appendChild(message)
            setTimeout(() => {
                message.parentNode.removeChild(message)
            }, 2000);
        }
    }

addButton.addEventListener('click', function(btn){
    if(btn.target){
        addTask()
    }
})

const showButton = () =>{
    document.querySelector('#editBtn').style.visibility = 'visible'
    document.querySelector('#delBtn').style.visibility = 'visible'
}

const hideButton = () =>{
    document.querySelector('#editBtn').style.visibility = 'hidden'
    document.querySelector('#delBtn').style.visibility = 'hidden'
}