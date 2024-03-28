const addBtn = document.querySelector('#add-btn')
const todoText = document.querySelector('#todo-text')
const list = document.querySelector('#list')

addBtn.onclick = () => {
    if (!todoText.value.trim()) {
        alert('PLease, enter a task!')
        return
    }

    const todo = document.createElement('div')
    todo.classList.add('item')
    const text = document.createElement('p')
    text.innerText = todoText.value
    todo.append(text)
    list.prepend(todo)
    todoText.value = ''

    // Create button container
    const tools = document.createElement('div')
    tools.classList.add('tools')

    // Create delete button
    const btnDelete = document.createElement('button')
    btnDelete.innerHTML = "&#128686;" // other garbage symbols if necessary "&#128465" , "&#128686;"
    btnDelete.classList.add('del-button')
    btnDelete.onclick = () => removeToDo(todo)

    // Create complete button
    const btnComplete = document.createElement('button')
    btnComplete.innerText = 'Complete'
    btnComplete.classList.add('complete-btn')
    btnComplete.onclick = () => changeToDoStatus(todo)

    // Add buttons into the "tools" div
    tools.append(btnDelete, btnComplete)

    todo.append(tools)
    todoText.value = ''
}

function removeToDo(elem) {
    elem.remove()
}

function changeToDoStatus(elem) {
    elem.classList.toggle('done')

    if (elem.classList.contains('done')) {
        elem.querySelector('.complete-btn').innerText = 'Cancel'
    } else {
        elem.querySelector('.complete-btn').innerText = 'Complete'
    }
}

// Filter the list

const radioBtn = document.querySelectorAll("input[name = 'filter']")
radioBtn.forEach(radio => {
    radio.onchange = function () {
        let all = document.querySelectorAll('.item')
        all.forEach(elm => elm.classList.add('hide'))

        switch (this.value) {
            case 'all':
                all.forEach(item => item.classList.remove('hide'))
                break
            case 'active':
                all.forEach(item => !item.classList.contains('done') && item.classList.remove('hide'))
                break
            case 'completed':
                all.forEach(item => item.classList.contains('done') && item.classList.remove('hide'))
                break

        }
    }
})