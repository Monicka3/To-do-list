// Get elements from the DOM
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value;

    if (taskText.trim() !== '') {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <span class="delete-btn" onclick="deleteTask(this)">Delete</span>
        `;

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }
}

// Function to delete a task
function deleteTask(element) {
    const listItem = element.parentElement;
    taskList.removeChild(listItem);
}
