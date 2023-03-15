/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const newTodoInput = document.querySelector('.new-task-input');\nconst newTodoSubmit = document.querySelector('.new-task-submit');\nconst todoList = document.querySelector('.todo-list');\n\ndocument.addEventListener('DOMContentLoaded', getTodos);\nnewTodoSubmit.addEventListener('click', addTodo);\ndocument.addEventListener(\"dblclick\", markTodo);\ntodoList.addEventListener('click', deleteTask);\n// todoList.addEventListener('click', editTask);\n\nfunction addTodo(event) {\n    event.preventDefault();\n\n    const content = document.createElement('div');\n    content.classList.add('content');\n    content.classList.add('flex');\n    todoList.appendChild(content);\n\n    const todoTask = document.createElement('div');\n    todoTask.classList.add('todo-description');\n    todoTask.classList.add('text-dark');\n    todoTask.classList.add('text-output');\n    todoTask.classList.add('flex');\n    // todoTask.setAttribute('readonly','readonly')\n    todoTask.innerHTML = newTodoInput.value;\n    content.appendChild(todoTask);\n    saveLocalStorage(newTodoInput.value)\n    const actions = document.createElement('span');\n    actions.classList.add('actions');\n    content.appendChild(actions);\n\n    const editTodoBtn = document.createElement('button');\n    editTodoBtn.classList.add('action-btn');\n    editTodoBtn.classList.add('edit');\n    editTodoBtn.innerHTML = '<i class=\"fa-solid fa-pen\"></i>'\n    actions.appendChild(editTodoBtn);\n\n    const deleteTodoBtn = document.createElement('button');\n    deleteTodoBtn.classList.add('action-btn');\n    deleteTodoBtn.classList.add('delete');\n    deleteTodoBtn.innerHTML = '<i class=\"fa-solid fa-trash\"></i>'\n    actions.appendChild(deleteTodoBtn);\n\n\nnewTodoInput.value = '';\n\n}\n\nfunction deleteTask(e) {\n\n    const item = e.target;\n    if(item.classList[1] === 'delete') {\n        removeLocalStorage(item)\n        item.parentElement?.parentElement?.remove();\n        \n    }\n}\nfunction markTodo(e) {\n    const contentElement = document.querySelector('.content');\n    const item = e.target.closest(\".todo-description\");\n    item.classList.toggle('checked');\n    if(item.classList.contains('checked')) {\n        alert('TASK DONE');\n        contentElement.style.border = \"green\";\n    } else {\n        alert('TASK NOT DONE YET');\n    }\n\n    \n    }\n   function editTask(e) {\n    \n    // const contentElement = document.querySelector('.todo-description');\n    //     const visibility = contentElement.getAttribute('contentEditable');\n\n    //     if(item.classList[1] === 'edit' && visibility === 'true') {\n    //         contentElement.setAttribute('contentEditable',false);\n    //     } else if (item.classList[1] === 'edit' && visibility === 'false') {\n    //         contentElement.setAttribute('contentEditable',true);\n            \n    //     }\n\n   }\n   function saveLocalStorage(todo) {\n        let todos;\n        if(localStorage.getItem('todos') === null ) {\n            todos = [];\n        } else {\n            todos = JSON.parse(localStorage.getItem('todos'));\n\n        }\n        todos.push(todo);\n        localStorage.setItem('todos', JSON.stringify(todos));\n   }\n   function getTodos() {\n    let todos;\n    if(localStorage.getItem('todos') === null ) {\n        todos = [];\n    } else {\n        todos = JSON.parse(localStorage.getItem('todos'));\n\n    }\n    todos.forEach(todoa => {\n\n    const content = document.createElement('div');\n    content.classList.add('content');\n    content.classList.add('flex');\n    todoList.appendChild(content);\n\n    const todoTask = document.createElement('div');\n    todoTask.classList.add('todo-description');\n    todoTask.classList.add('text-dark');\n    todoTask.classList.add('text-output');\n    todoTask.classList.add('flex');\n    \n    todoTask.innerHTML = todoa;\n    content.appendChild(todoTask);\n    \n    const actions = document.createElement('span');\n    actions.classList.add('actions');\n    content.appendChild(actions);\n\n    const editTodoBtn = document.createElement('button');\n    editTodoBtn.classList.add('action-btn');\n    editTodoBtn.classList.add('edit');\n    editTodoBtn.innerHTML = '<i class=\"fa-solid fa-pen\"></i>'\n    actions.appendChild(editTodoBtn);\n\n    const deleteTodoBtn = document.createElement('button');\n    deleteTodoBtn.classList.add('action-btn');\n    deleteTodoBtn.classList.add('delete');\n    deleteTodoBtn.innerHTML = '<i class=\"fa-solid fa-trash\"></i>'\n    actions.appendChild(deleteTodoBtn);\n    });\n   }\n\n\n   function removeLocalStorage(todo) {\n    let todos;\n    if(localStorage.getItem('todos') === null ) {\n        todos = [];\n    } else {\n        todos = JSON.parse(localStorage.getItem('todos'));\n\n    }\n    console.log('deleted');\n    const todoIndex = todo.children[0].innerText;\n    todos.splice(todos.indexOf(todoIndex),1);\n    localStorage.setItem('todos',JSON.stringify(todos))\n   }\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;