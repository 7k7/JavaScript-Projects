// this function gets the taask from input
function get_todos() {
    // This creates an array of tasks that are inputed
    var todos = new Array;
    // this pulls the task that was saved in the web browser memory
    var todos_str = localStorage.getItem('todo');
    // If the input is not null then JSON.parse will
    // communicate with the web browser to make the task a JS obj
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

// This f() adds he inputed task to the get_todos function array
function add() {
    // This taskes the inputed task and creates a variable of it
    var task = document.getElementById('task').value;

    var todos = get_todos();
    // This adds a new task at the end of the array
    todos.push(task);
    // This converts the task input to a JSON string 
    // also stores the item in the browser's memory
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = "";
    show();
    
    return false;
}

// This f() keeps the tasks permanetly displayed on the screen
function show() {
    // This sets the task that was retrieved as a variable
    var todos = get_todos();

    //This sets up each task as an unordered list
    var html = '<ul>';
    // This displays a task to the list in the order that it is inputed
    for (var i = 0; i < todos.length; i++) {
        // This also displays the task as a list and creates the button with the "x"
        html += '<li>' + todos[i] + '<button class="remove" id="' + i +'">x</button></li>';
    };
    html += '</ul>';
    // This displays the task as a list
    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
}

// This f() removes a todo item when the user clicks on its x button
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}

// This displays the inputed task when the 'Add Item' button is clicked
document.getElementById('add').addEventListener('click', add);
// This will keep the inputs displayed permanently on the screen
show();