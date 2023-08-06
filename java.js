function addTodo() {
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();

    if (todoText !== '') {
        const todoList = document.querySelector('.todo-list');

        // Create a new to-do item
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const label = document.createElement('label');
        label.textContent = todoText;

        todoItem.appendChild(checkbox);
        todoItem.appendChild(label);

        todoList.appendChild(todoItem);

        input.value = '';
    }

    return false; // Prevent form submission
}
