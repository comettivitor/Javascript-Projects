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
        task.innerText = `Task: ${inputText.value} \n Date: ${inputDate.value}\n`
        document.body.appendChild(task)
        task.classList.add('divTask')
            
        let editButton = document.createElement("button")
        editButton.innerHTML = 'Edit'
        task.appendChild(editButton)
        editButton.setAttribute('id', 'editBtn')
        editButton.addEventListener('click', function(edit){
            if(edit.target){
                alert("Edit your task in the task-box")
                addButton.style.visibility = 'hidden'
                saveBtn.style.visibility = 'visible'
                let index = list.indexOf(task)
                list.splice(index, 1)
                console.log(list)
                saveBtn.addEventListener('click', function(save){
                    if(inputText.value !== ''){
                    list.push([inputText.value, inputDate.value])
                    console.log(list)
                    task.innerText = `Task: ${inputText.value} \n Date: ${inputDate.value}\n`
                    clean()
                    saveBtn.style.visibility = 'hidden'
                    addButton.style.visibility = 'visible'
                    task.appendChild(editButton)
                    task.appendChild(deleteButton)
                    }else{
                        const message = document.createTextNode("Please, add a task...")
                        nullText.appendChild(message)
                        setTimeout(() => {
                            message.parentNode.removeChild(message)
                        }, 2000);
                    }
                })
            }
                clean()
                deleteButton.addEventListener('click', function(del2){
                    if(del2.target){
                    saveBtn.style.visibility = 'hidden'
                    addButton.style.visibility = 'visible'
                    clean()
                    }
                })
                    
        })
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
    addButton.addEventListener('click', function(btn){
        if(btn.target){
            addTask()        
        }
    })

    const clean = () =>{
        inputText.value = ''
        inputDate.value = ''
    }
