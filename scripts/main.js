const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === ''){
        alert("Escreva algo para adicionar uma tarefa.");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    inputBox.value = "";
    saveData();
}

showTask();

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

let isDarkMode = false;
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
sunIcon.src = "/images/dark/sun-dark.png";
moonIcon.src = "/images/dark/moon-dark.png";

const changeThemeBtn = document.querySelector('#change-theme');
changeThemeBtn.addEventListener("change", () => {
    if (isDarkMode) {
        document.body.classList.remove("dark");
        sunIcon.src = "/images/dark/sun-dark.png";
        moonIcon.src = "/images/dark/moon-dark.png";
    } else {
        document.body.classList.add("dark");
        sunIcon.src = "/images/light/sun-light.png";
        moonIcon.src = "/images/light/moon-light.png";
    }

    isDarkMode = !isDarkMode;
})