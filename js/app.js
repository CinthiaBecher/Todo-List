// Selecting elements
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector('#edit-input');
const cancelEdit = document.querySelector('#ancel-edit-btn');

//Functions
const saveTodo = taskName => {

    const task = document.createElement('div');
    task.classList.add("task");

    const checkName = document.createElement('div');
    checkName.classList.add("check-name")
    task.appendChild(checkName);

    const finishTodo = document.createElement('button');
    finishTodo.classList.add("finish-todo");
    finishTodo.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkName.appendChild(finishTodo);

    const todoTitle = document.createElement('h3');
    todoTitle.innerText = taskName;
    checkName.appendChild(todoTitle); //add inside div 

    const controls = document.createElement('div');
    controls.classList.add("controls");
    controls.classList.add("task-controls");
    task.appendChild(controls);

    const editTodo = document.createElement('button');
    editTodo.classList.add("edit-todo");
    editTodo.innerHTML = '<i class="fa-solid fa-pen"></i>'
    controls.appendChild(editTodo);

    const removeTodo = document.createElement('button');
    removeTodo.classList.add("remove-todo");
    removeTodo.innerHTML = '<i class="fa-solid fa-trash"></i>'
    controls.appendChild(removeTodo);

    todoList.appendChild(task);

    todoInput.value = "";
    todoInput.focus();
}


//Events

/* Adding a new task */
todoForm.addEventListener("submit", (e) => {
    e.preventDefault(); //the page will not be reloaded

    const inputValue = todoInput.value //getting the task name

    if (inputValue) saveTodo(inputValue)
})

/* Listen event for every button and call the respective action */
document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest(".task");

    console.log(targetEl);

    if(targetEl.classList.contains('finish-todo')){
        console.log('Finish TODO');
        parentEl.classList.toggle("done");
    }
    else if(targetEl.classList.contains('remove-todo')){
        //TO-DO: add a confirmation button
        console.log('Remove TODO');
        parentEl.remove();
    }
    else if(targetEl.classList.contains('edit-todo')){
        console.log('Edit TODO');
    }


})
