// Selecting elements
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector('#edit-input');
const cancelEdit = document.querySelector('#cancel-edit-btn');

let oldInputTitleValue;

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

//editing a task
const toggleEdit = () => {
    editForm.classList.toggle('hide');
    todoForm.classList.toggle('hide');
    todoList.classList.toggle('hide');
}

const updateTask = (text) => {
    const tasks = document.querySelectorAll('.task');
    console.log(tasks)

    tasks.forEach((task) => {
        let taskTitle = task.querySelector("h3")
        if (taskTitle.innerText === oldInputTitleValue){
            //TODO: se tem mais de uma task igual ele troca todos 
            taskTitle.innerText = text
        }
        
    })
}

//if there's not any new task
//  Ready to be productive? Add your tasks and take Control of Your Day 
//  Start to organize Your Life in Minutes
//  Let's get started! Add your first task now.
//  Your to-do list is empty. Time to add your first task!


//if all the tasks are checked
//  Looks like you've tackled everything. Nice job!
//  You're up to date. Use this time to focus on something else.
//  Nothing left on your to-do list! Take a moment to relax and recharge.
//  All caught up! Take a break and recharge.

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

    let taskTitle;
    if(parentEl && parentEl.querySelector("h3")){
        taskTitle = parentEl.querySelector("h3").innerText;
        console.log(taskTitle);
    }

    //console.log(targetEl);

    if(targetEl.classList.contains('finish-todo')){
        //console.log('Finish TODO');
        parentEl.classList.toggle("done");
    }
    else if(targetEl.classList.contains('remove-todo')){
        //TO-DO: add a confirmation button
        //console.log('Remove TODO');
        if(!confirm('Are you sure?')) {
            e.preventDefault();
        }else{
            parentEl.remove();
        }

    }
    else if(targetEl.classList.contains('edit-todo')){
        console.log('Edit TODO');
        toggleEdit();

        editInput.value = taskTitle;
        oldInputTitleValue = taskTitle;
    }


});

//edit form
cancelEdit.addEventListener("click", (e) => {
    e.preventDefault();

    toggleEdit();
})

editForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const editInputValue = editInput.value;

    if(editInputValue){
        //update
        console.log('update todo ' + editInputValue )
        updateTask(editInputValue);
    }

    toggleEdit();
})

