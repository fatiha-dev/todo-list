const newTodoInput = document.querySelector('.new-task-input');
const newTodoSubmit = document.querySelector('.new-task-submit');
const todoList = document.querySelector('.todo-list');

document.addEventListener('DOMContentLoaded', getTodos);
newTodoSubmit.addEventListener('click', addTodo);
document.addEventListener("dblclick", markTodo);
todoList.addEventListener('click', deleteTask);
// todoList.addEventListener('click', editTask);

function addTodo(event) {
    event.preventDefault();

    const content = document.createElement('div');
    content.classList.add('content');
    content.classList.add('flex');
    todoList.appendChild(content);

    const todoTask = document.createElement('div');
    todoTask.classList.add('todo-description');
    todoTask.classList.add('text-dark');
    todoTask.classList.add('text-output');
    todoTask.classList.add('flex');
    // todoTask.setAttribute('readonly','readonly')
    todoTask.innerHTML = newTodoInput.value;
    content.appendChild(todoTask);
    saveLocalStorage(newTodoInput.value)
    const actions = document.createElement('span');
    actions.classList.add('actions');
    content.appendChild(actions);

    const editTodoBtn = document.createElement('button');
    editTodoBtn.classList.add('action-btn');
    editTodoBtn.classList.add('edit');
    editTodoBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    actions.appendChild(editTodoBtn);

    const deleteTodoBtn = document.createElement('button');
    deleteTodoBtn.classList.add('action-btn');
    deleteTodoBtn.classList.add('delete');
    deleteTodoBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    actions.appendChild(deleteTodoBtn);


newTodoInput.value = '';

}

function deleteTask(e) {

    const item = e.target;
    if(item.classList[1] === 'delete') {
        removeLocalStorage(item)
        item.parentElement?.parentElement?.remove();
        
    }
}
function markTodo(e) {
    const contentElement = document.querySelector('.content');
    const item = e.target.closest(".todo-description");
    item.classList.toggle('checked');
    if(item.classList.contains('checked')) {
        alert('TASK DONE');
        contentElement.style.border = "green";
    } else {
        alert('TASK NOT DONE YET');
    }

    
    }
   function editTask(e) {
    
    // const contentElement = document.querySelector('.todo-description');
    //     const visibility = contentElement.getAttribute('contentEditable');

    //     if(item.classList[1] === 'edit' && visibility === 'true') {
    //         contentElement.setAttribute('contentEditable',false);
    //     } else if (item.classList[1] === 'edit' && visibility === 'false') {
    //         contentElement.setAttribute('contentEditable',true);
            
    //     }

   }
   function saveLocalStorage(todo) {
        let todos;
        if(localStorage.getItem('todos') === null ) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem('todos'));

        }
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
   }
   function getTodos() {
    let todos;
    if(localStorage.getItem('todos') === null ) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));

    }
    todos.forEach(todoa => {

    const content = document.createElement('div');
    content.classList.add('content');
    content.classList.add('flex');
    todoList.appendChild(content);

    const todoTask = document.createElement('div');
    todoTask.classList.add('todo-description');
    todoTask.classList.add('text-dark');
    todoTask.classList.add('text-output');
    todoTask.classList.add('flex');
    
    todoTask.innerHTML = todoa;
    content.appendChild(todoTask);
    
    const actions = document.createElement('span');
    actions.classList.add('actions');
    content.appendChild(actions);

    const editTodoBtn = document.createElement('button');
    editTodoBtn.classList.add('action-btn');
    editTodoBtn.classList.add('edit');
    editTodoBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    actions.appendChild(editTodoBtn);

    const deleteTodoBtn = document.createElement('button');
    deleteTodoBtn.classList.add('action-btn');
    deleteTodoBtn.classList.add('delete');
    deleteTodoBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    actions.appendChild(deleteTodoBtn);
    });
   }


   function removeLocalStorage(todo) {
    let todos;
    if(localStorage.getItem('todos') === null ) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));

    }
    console.log('deleted');
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem('todos',JSON.stringify(todos))
   }
