const todoInput = document.querySelector("#todo-text");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoCountSpan = document.querySelector("#todo-count");

const todos = [];

// TODO: What is the purpose of this function?
function renderTodos() {
  // adds text to to-do list
  // TODO: Describe the functionality of the following two lines of code.
  todoList.innerHTML = ""; // changes HTML to accept string value - create li?
  todoCountSpan.textContent = todos.length; // number of entries tracked and displayed

  // TODO: Describe the functionality of the following `for` loop.
  for (let i = 0; i < todos.length; i++) {
    // iterates through todos array
    const todo = todos[i]; // stores value of todos - one per iteration

    const li = document.createElement("li"); //adds a list item to the ul for each entry
    li.textContent = todo; // updates text content based on todays
    li.setAttribute("data-index", i); // sets attribute as it iterates for each entry

    const button = document.createElement("button"); // creates button for todo entry
    button.textContent = "Complete ✔️"; // adds text content to button

    li.appendChild(button); // appends button after the list item
    todoList.appendChild(li); // adds the to do item to the list
  }
}

// TODO: What is the purpose of the following function?
function init() {
  // a function that initializes data
  // TODO: What is the purpose of the following line of code?
  const storedTodos = JSON.parse(localStorage.getItem("todos")); // gets the object data from server and outputs values without strings storing values in variable
  // TODO: Describe the functionality of the following `if` statement.
  if (storedTodos !== null) {
    todos = storedTodos; // if a value is present store in storedTodos - why does this occur again?
  }
  // TODO: Describe the purpose of the following line of code.
  renderTodos(); // calls the function
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  localStorage.setItem("todos", JSON.stringify(todos)); // stores the todo list in local storage and converts to string to store as object on server
}
// TODO: Describe the purpose of the following line of code.
todoForm.addEventListener("submit", function (event) {
  // runs the
  event.preventDefault();
  const todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  if (todoText === "") {
    return;
  }
  // TODO: Describe the purpose of the following lines of code.
  todos.push(todoText);
  todoInput.value = "";

  // TODO: What will happen when the following functions are called?
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
todoList.addEventListener("click", function (event) {
  const element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  if (element.matches("button") === true) {
    const index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    storeTodos();
    renderTodos();
  }
});

init();
