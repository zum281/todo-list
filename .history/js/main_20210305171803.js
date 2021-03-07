const add_todo_btn = $("#add-todo-btn");
const add_todo_input = $("#add-todo");
const todo_list_container = $(".todo-list-container");
let todos = [];

$(document).ready(function () {
    add_todo_btn.click(() => {
        let new_todo = add_todo_input.val();
        todos.push(new_todo);

        alert(todos);
    });
});
