let updateClose = document.querySelector(".updateClose");
let updateBox = document.querySelector(".updateBox");
let updateDate = document.querySelector(".updateDate");
updateClose.addEventListener("click", () => {
    updateBox.classList.toggle("updateBoxAnimation");
});
function updateTask(id) {
    let updateInput = document.querySelector(".updateInput");
    let updateBtn = document.querySelector(".updateBtn");
    updateBox.classList.toggle("updateBoxAnimation");
    updateInput.value = tasks.filter((task) => {
        return task.id == id;
    })[0].content;
    updateBtn.addEventListener("click", () => {
        tasks = tasks.map((task) => {
            if (task.id == id) {
                task.content = updateInput.value;
                task.date =     updateDate.value;
            }
            return task;
        });
        updateBox.classList.toggle("updateBoxAnimation");
        updateDataToLocalStorage();
        showTasks(tasks);
    });
}
