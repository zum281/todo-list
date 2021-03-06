const add_todo_btn = $("#add-todo-btn");
const add_todo_input = $("#add-todo");
const todo_list_container = $(".todo-list-container");
const todo_list = $(".todo-list");
let todos = [];
let completed_todos = [];
$(document).ready(function () {
    $("#show-all").trigger("click");
    add_todo_btn.click(() => {
        let new_todo = add_todo_input.val();
        if (new_todo != "") {
            todos.push(new_todo);

            todo_list_container.show();
            todo_list.append(`
            <li class="todo-item" data-status="not-completed"><span class="todo-text">${new_todo}</span>
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

    $("#show-all").click(function () {
        $("#show-all").addClass("active");
        $("#show-completed").removeClass("active");
        $("#show-not-completed").removeClass("active");
        todo_list.children().each(function () {
            $(this).show();
        });
    });
    $("#show-completed").click(function () {
        $("#show-all").removeClass("active");
        $("#show-completed").addClass("active");
        $("#show-not-completed").removeClass("active");
        todo_list.children().each(function () {
            if ($(this).attr("data-status") == "completed") $(this).show();
            else $(this).hide();
        });
    });

    $("#show-not-completed").click(function () {
        $("#show-all").removeClass("active");
        $("#show-completed").removeClass("active");
        $("#show-not-completed").addClass("active");
        todo_list.children().each(function () {
            if ($(this).attr("data-status") == "not-completed") $(this).show();
            else $(this).hide();
        });
    });

    $(document).on("click", ".done", function () {
        let todo_el = $(this).parents(".todo-item");
        let todo = todo_el.find(".todo-text");
        todo_el.attr("data-status", "completed");
        console.log(todo_el.attr("data-status"));
        let text = todo.html();
        todo.html(text.strike());
        let pos = todos.indexOf(todo);
        let removedItem = todos.splice(pos, 1); // this is how to remove an item
        completed_todos.push(removedItem);

        if ($("#show-not-completed").hasClass("active")) {
            $("#show-not-completed").trigger("click");
        }
    });
    $(document).on("click", ".remove", function () {
        let removedItem;
        let todo_el = $(this).parents(".todo-item");
        let todo = todo_el.find(".todo-text").html();

        if (todos.includes(todo)) {
            let pos = todos.indexOf(todo);
            removedItem = todos.splice(pos, 1); // this is how to remove an item
        } else {
            let pos = completed_todos.indexOf(todo);
            removedItem = completed_todos.splice(pos, 1); // this is how to remove an item
        }
        todo_el.remove();
    });
});

$(document).keyup(function (e) {
    if (e.key == "Enter") {
        add_todo_btn.trigger("click");
    }
});
