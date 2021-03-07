const add_todo_btn = $("#add-todo-btn");
const add_todo_input = $("#add-todo");
const todo_list_container = $(".todo-list-container");
const todo_list = $(".todo-list");
let todos = [];

$(document).ready(function () {
    add_todo_btn.click(() => {
        let new_todo = add_todo_input.val();
        todos.push(new_todo);

        todo_list_container.show();
        todo_list.append(`
        <li class="todo-item"><span class="todo-text">${new_todo}</span>
        <div class="icons">
            <div class="icon"><i class="bi bi-check"></i></div>
            <div class="icon"><i class="bi bi-x"></i></div>
        </div>
    </li>
        `);
        alert(todos);
    });
});
