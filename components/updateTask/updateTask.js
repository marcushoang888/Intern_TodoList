let updateClose = document.querySelector(".updateClose");
let updateBox = document.querySelector(".updateBox");
let updateBtn = document.querySelector(".updateBtn");
updateClose.addEventListener("click", () => {
    updateBox.classList.toggle("updateBoxAnimation");
});

function updateTask(id) {
    let updateInput = document.querySelector(".updateInput");
    let updateDate = document.querySelector(".updateDate");
    updateBox.classList.toggle("updateBoxAnimation");

    let updateTask = tasks.find((task) => task.id == id);
    if (updateTask) {
        updateInput.value = updateTask.content;
        updateDate.value = updateTask.date;
    }

    updateBtn.setAttribute("task-id", id);
}

updateBtn.addEventListener("click", () => {
    let updateInput = document.querySelector(".updateInput");
    let updateDate = document.querySelector(".updateDate");
    let taskId = updateBtn.getAttribute("task-id");
    let updateTask = tasks.find((task) => task.id == taskId);
    updateTask.content = updateInput.value;
    updateTask.date = updateDate.value;

    updateBox.classList.toggle("updateBoxAnimation");
    updateDataToLocalStorage();
    showTasks(tasks);
});
