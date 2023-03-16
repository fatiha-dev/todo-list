function createTaskElement(description) {

    const todoList = document.createElement('div');
    todoList.classList.add('todo-list');
    todoList.classList.add('flex');

    const content = document.createElement('div');
    content.classList.add('content');
    content.classList.add('flex');
    const todoInput = document.createElement('input');
    todoInput.classList.add('todo-description')
    todoInput.textContent = description;

    const actions = document.createElement('span');
    actions.classList.add('actions');
    const editTodoBtn = document.createElement('button');
    actions.classList.add('action-btn');
    actions.classList.add('edit');
    const deleteTodoBtn = document.createElement('button');
    actions.classList.add('action-btn');
    actions.classList.add('delete');
    

    todoList.appendChild(content);
    task.appendChild(actions);
    content.appendChild(todoInput);
    actions.appendChild(editTodoBtn);
    actions.appendChild(deleteTodoBtn);

    return todoList;

}

function loadTask() {
    const bodyElt = document.getElementById('body');
    bodyElt.textContent = '';
    bodyElt.appendChild(createTaskElement());
}

function toggleMenu() {
    const nav = document.querySelector('.primary-navigation');
    const navToggle = document.querySelector('.mobile-nav-toggle');
    navToggle.addEventListener('click', () => {
        const visibility = nav.getAttribute('data-visible');
        if(visibility === 'false') {
            nav.setAttribute('data-visible', true);
            navToggle.setAttribute('aria-expanded', true)
        } else {
            nav.setAttribute('data-visible', false);
            navToggle.setAttribute('aria-expanded', false);
        }
    })

}
