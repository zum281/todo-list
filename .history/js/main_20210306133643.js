const add_todo_btn = $("#add-todo-btn");
const add_todo_input = $("#add-todo");
const todo_list_container = $(".todo-list-container");
const todo_list = $(".todo-list");
let todos = [];
let completed_todos = [];
$(document).ready(function () {
    add_todo_btn.click(() => {
        let new_todo = add_todo_input.val();
        if (new_todo != "") {
            todos.push(new_todo);

            todo_list_container.show();
            todo_list.append(`
            <li class="todo-item"><span class="todo-text">${new_todo}</span>
                <div class="icons">
                    <div class="icon done"><i class="bi bi-check"></i></div>
                    <div class="icon remove"><i class="bi bi-x"></i></div>
                </div>
            </li>
            `);

            add_todo_input.val("");
        } else {
            alert("puzzi");
        }
    });

    $(document).on("click", ".done", function () {
        let todo_el = $(this).parents(".todo-item");
        let todo = todo_el.find(".todo-text");
        let text = todo.html();
        todo.html(text.strike());
        let pos = todos.indexOf(todo);
        let removedItem = todos.splice(pos, 1); // this is how to remove an item
        completed_todos.push(removedItem);
    });
    $(document).on("click", ".remove", function () {
        let todo_el = $(this).parents(".todo-item");
        let todo = todo_el.find(".todo-text").html();

        if todos.includes(todo) {
            let pos = todos.indexOf(todo);
        let removedItem = todos.splice(pos, 1); // this is how to remove an item
        todo_el.remove();
        }

        let pos = todos.indexOf(todo);
        let removedItem = todos.splice(pos, 1); // this is how to remove an item
        todo_el.remove();
        alert(removedItem + " was removed."); //TODO: Make this a sweetalert
    });
});

$(document).keyup(function (e) {
    if (e.key == "Enter") {
        add_todo_btn.trigger("click");
    }
});
