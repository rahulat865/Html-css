const text = ["To-do List", "Task Manager", "Productivity App", "Get Things Done"];
let count = 0;

setInterval(() => {
    count =  (count + 1) % text.length;
    document.getElementById("dynamic-text").innerText = text[count];
}, 2000);

const input = document.getElementById("task-input");
const inputBox = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

function escapeHtml(text) {
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

function addTask() {
    const taskText = inputBox.value.trim();

    if (taskText === "") {
        alert("Please add a task");
        return;
    }

    const li = document.createElement("li");
    li.className = "task-item";

    li.innerHTML = `
    <span>${escapeHtml(taskText)}</span>
    <div class="task-buttons">
      <button class="done-btn">Done</button>
      <button class="delete-btn">Delete</button>
    </div>
    `;

    taskList.appendChild(li);
    inputBox.value = "";
    inputBox.focus();
}

addTaskBtn.addEventListener("click", addTask);

inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("done-btn")) {
        const taskText = event.target.parentElement.previousElementSibling;
        if (taskText) taskText.classList.toggle("completed");
    }

    if (event.target.classList.contains("delete-btn")) {
        const taskItem = event.target.closest("li");
        if (taskItem) taskItem.remove();
    }
});



