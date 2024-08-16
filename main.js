const inputTask = document.querySelector(".inputTask");
const todo = document.getElementById("todo");
const doneTodo = document.getElementById("doneTodo");
const otherInfo = document.querySelector(".otherInfo");
const numberCompleted = document.querySelector(".numberCompleted");
const addButton = document.querySelector("#add-button");
const calendar = document.querySelector(".calendar");
const inputImportantCheck = document.querySelector("#importantCheck");
const sidebarBox = document.querySelector(".sidebarBox");
const appIcons = document.querySelectorAll(".appIcon");
const container = document.querySelector(".container");
const complete = document.querySelector(".complete");
const angle = document.querySelector(".angle");
const menuIcons = document.querySelectorAll(".menuIcon");
const menu = document.querySelector(".menu");

let menuBtns = document.querySelectorAll(".menuBtn");
let mains = document.querySelectorAll(".main");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

complete.addEventListener("click", () => {
    doneTodo.classList.toggle("activeTodo");
    angle.classList.toggle("fa-angle-up");


    if (!doneTodo.classList.contains("activeTodo")) {
        setTimeout(function () {
            doneTodo.style.display = "none";
        }, 500);
    } else {
        setTimeout(function () {
            doneTodo.style.display = "block";
        }, 500);
    }
});

if (tasks.length > 0) {
    showTasks(tasks);
}

container.addEventListener("click", () => {
    if (sidebarBox.classList.contains("sideBarActive")) {
        console.log(true);

        sidebarBox.classList.toggle("sideBarActive");
    }
});
// Event
inputImportantCheck.addEventListener("click", () => {
    if (inputImportantCheck.checked) {
        importantTask = tasks.filter((task) => {
            return task.important == true;
        });
        showTasks(importantTask);
    } else {
        showTasks(tasks);
    }
});

document.getElementById("add-button").addEventListener("click", () => {
    addTask();
    showTasks(tasks);
});

document.addEventListener("keypress", (event) => {
    if (event.key == "Enter" && inputTask.value != "" && calendar.value != "") {
        addTask();
        showTasks(tasks);
    } else if (event.key == "Enter") {
        alert("Please fill in all the fields");
        event.preventDefault();
    }
});

// Single Page Application
menuBtns.forEach((menuBtn, index) => {
    menuBtn.addEventListener("click", () => {
        mains.forEach((main, i) => {
            if (i == index && !main.classList.contains("active")) {
                main.classList.toggle("active");
            }
            if (i != index && main.classList.contains("active")) {
                main.classList.toggle("active");
            }
        });
    });
});
// Sidebar hiển thị apps
appIcons.forEach((appIcon) => {
    appIcon.addEventListener("click", () => {
        sidebarBox.classList.toggle("sideBarActive");
    });
});

// ******************************************************
// FUNCTION
function updateDataToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    tasks.push({
        id: new Date().getTime(),
        content: inputTask.value,
        status: false,
        important: false,
        date: calendar.value,
    });

    inputTask.value = "";
    calendar.value = "";
    updateDataToLocalStorage();
}
function deleteTask(id) {
    tasks = tasks.filter((task) => {
        return task.id != id;
    });
    updateDataToLocalStorage();
    showTasks(tasks);
}
function showTasks(showedTasks) {
    todo.innerHTML = ``;
    doneTodo.innerHTML = ``;
    let tasksCompleted = 0;
    for (let i = 0; i < showedTasks.length; i++) {
        const todoComponent = `
                <div class="todoComponent">
                    <span class="circle ${
                        showedTasks[i].status ? "done" : ""
                    }" onClick=changeStatus(${i}) id="${i}">
                    <p>✓</p>
                    </span>
                    <p class="taskContent ${
                        showedTasks[i].status ? "throughline" : ""
                    }">
                    ${showedTasks[i].content}
                    </p>
                    <input type="date" value="${
                        showedTasks[i].date
                    }" class="calendar" disabled/>
                    <i class="updateTask fa-regular fa-pen-to-square" onClick=updateTask(${
                        showedTasks[i].id
                    })></i>
                    <i class="favTask fa-regular fa-star ${
                        showedTasks[i].important ? "fa-solid" : ""
                    }" onClick=changeImportant(${showedTasks[i].id}) id="${
            showedTasks[i].id
        }"></i>
                    <button class="deleteTask btnSubmit" onClick=deleteTask(${
                        showedTasks[i].id
                    })>Delete</button>
                </div>
            `;

        if (showedTasks[i].status == false) {
            todo.innerHTML += todoComponent;
        } else {
            doneTodo.innerHTML += todoComponent;
            tasksCompleted += 1;
        }
    }
    numberCompleted.innerHTML = tasksCompleted;
}
function changeStatus(i) {
    tasks[i].status = !tasks[i].status;
    showTasks(tasks);
    updateDataToLocalStorage();
}

function changeImportant(id) {
    tasks.forEach((task) => {
        if (task.id == id) {
            task.important = !task.important;
        }
    });

    let stars = document.querySelectorAll(".favTask");
    stars.forEach((star) => {
        if (star.id == id) {
            star.classList.toggle("fa-solid");
        }
    });

    updateDataToLocalStorage();
}

function showBtn() {
    otherInfo.style.display = "flex";
}


menuIcons.forEach((menuIcon) => {
    menuIcon.addEventListener("click", () => {
        menu.classList.toggle("active");
        
    });
})


