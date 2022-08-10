const addButton = document.querySelector('.addButton');
const saveBtn = document.querySelector('.editButton')
const inputText = document.querySelector('.inputText');
const inputDate = document.querySelector('.inputDate')
const nullText = document.querySelector('.nullText')

var list = []


const addTask = () =>{
    if(inputText.value !== ''){
        list.push([inputText.value, inputDate.value])
            console.log(list)
            let task = document.createElement("div")
            task.innerText = `${inputText.value} \n Date: ${inputDate.value}\n`
            document.body.appendChild(task)
            task.classList.add('divTask')
            
            let editButton = document.createElement("button")
            editButton.innerHTML = 'edit'
            task.appendChild(editButton)
            editButton.setAttribute('id', 'editBtn')
            editButton.addEventListener('click', function(edit){
                if(edit.target){
                    inputText.value = list[0]
                    inputDate.value = list[1]
                    console.log(inputText.value)
                    addButton.style.visibility = 'hidden'
                    saveBtn.style.visibility = 'visible'
                    saveBtn.addEventListener('click', function(save){
                        task.innerText = `${inputText.value} \n Prazo: ${inputDate.value}\n`
                        document.body.appendChild(task)
                        task.classList.add('divTask')
                        clean()
                        saveBtn.style.visibility = 'hidden'
                        addButton.style.visibility = 'visible'
                        task.appendChild(editButton)
                        task.appendChild(deleteButton)
                    })
                    deleteButton.addEventListener('click', function(del2){
                        if(del2.target){
                        saveBtn.style.visibility = 'hidden'
                        addButton.style.visibility = 'visible'
                        clean()
                    }
                    })
                    
                }
        })
        clean()

            let deleteButton = document.createElement("button")
            deleteButton.innerHTML = 'Del'
            task.appendChild(deleteButton)
            deleteButton.setAttribute('id', 'delBtn')
            deleteButton.addEventListener('click', function(del){
                if(del.target){
                    let index = list.indexOf(task)
                    list.splice(index, 1)
                    task.parentNode.removeChild(task)
                    console.log(list)
                }
            })
            clean()
        }else{
            const message = document.createTextNode("Please, add a task...")
            nullText.appendChild(message)
            setTimeout(() => {
                message.parentNode.removeChild(message)
            }, 2000);
        }
    }


    console.log(list)

addButton.addEventListener('click', function(btn){
    if(btn.target){
        addTask()        
    }
})

const clean = () =>{
    inputText.value = ''
    inputDate.value = ''
}