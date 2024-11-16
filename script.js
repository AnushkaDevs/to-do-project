// Add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const pendingTasks = document.getElementById('pendingTasks');
        const newTask = createTaskElement(taskText, false);
        pendingTasks.appendChild(newTask);
        taskInput.value = ''; // Clear input field
    }
}

// Create a task element
function createTaskElement(taskText, isCompleted) {
    const li = document.createElement('li');
    const span = document.createElement('span');

    // Get the current date and time
    const date = new Date().toLocaleString();

    // Combine the task text with the date and time
    span.innerText = `${taskText} (Added: ${date})`;
    li.appendChild(span);

    // Add buttons for completing, editing, and deleting tasks
    if (!isCompleted) {
        const completeBtn = document.createElement('button');
        completeBtn.innerHTML = '<i class="fas fa-check"></i>';
        completeBtn.classList.add('complete-btn');
        completeBtn.onclick = () => completeTask(li, taskText);
        li.appendChild(completeBtn);

        const editBtn = document.createElement('button');
        editBtn.innerHTML = '<i class="fas fa-edit"></i>';
        editBtn.onclick = () => editTask(span);
        li.appendChild(editBtn);
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = () => deleteTask(li);
    li.appendChild(deleteBtn);

    return li;
}

// Mark a task as complete
function completeTask(taskElement, taskText) {
    const completedTasks = document.getElementById('completedTasks');
    const newTask = createTaskElement(taskText, true);
    completedTasks.appendChild(newTask);
    deleteTask(taskElement); // Remove from pending tasks
}

// Delete a task
function deleteTask(taskElement) {
    taskElement.remove();
}

// Edit a task
function editTask(taskSpan) {
    const currentText = taskSpan.innerText.split(' (Added: ')[0]; // Extract task text without date
    const newTaskText = prompt("Edit your task:", currentText);
    if (newTaskText !== null && newTaskText.trim() !== "") {
        const date = new Date().toLocaleString();
        taskSpan.innerText = `${newTaskText} (Added: ${date})`;
    }
}
