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
    checkName.appendChild(finishTodo);

    const checkIconBtn = document.createElement('i');
    checkIconBtn.classList.add("fa-solid");
    checkIconBtn.classList.add("fa-check");
    finishTodo.appendChild(checkIconBtn)

    const todoTitle = document.createElement('h3');
    todoTitle.innerText = taskName;
    checkName.appendChild(todoTitle); //add inside div 

    const controls = document.createElement('div');
    controls.classList.add("controls");
    controls.classList.add("task-controls");
    task.appendChild(controls);

    const editTodo = document.createElement('button');
    editTodo.classList.add("edit-todo");
    controls.appendChild(editTodo);

    const removeTodo = document.createElement('button');
    removeTodo.classList.add("remove-todo");
    controls.appendChild(removeTodo);
    
    const editIconBtn = document.createElement('i');
    editIconBtn.classList.add("fa-solid");
    editIconBtn.classList.add("fa-pen");
    editTodo.appendChild(editIconBtn);

    const removeIconBtn = document.createElement('i');
    removeIconBtn.classList.add("fa-solid");
    removeIconBtn.classList.add("fa-trash");
    removeTodo.appendChild(removeIconBtn);



    
    console.log(task);


 

/*
    <div class="task">

                <div class="check-name">
                    <button class="finish-todo">
                        <i class="fa-solid fa-check"></i>
                    </button>

                    <h3>Task name etc etc...</h3>
                </div>

                <div class="controls task-controls">
                    <button class="edit-todo">
                        <i class="fa-solid fa-pen"></i>
                    </button>

                    <button class="remove-todo">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
                
            </div>
*/
}


//Events

/* Adding a new task */
todoForm.addEventListener("submit", (e) => {
    e.preventDefault(); //the page will not be reloaded

    const inputValue = todoInput.value //getting the task name

    if (inputValue) saveTodo(inputValue)
})
