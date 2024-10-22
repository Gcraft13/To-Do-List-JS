//Setting the current date
const monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const inputBox = document.getElementById("input");
const listContainer = document.getElementById("list-container");
const date = new Date();

let day = date.getDate();
let month = monthName[date.getMonth()];
let year = date.getFullYear();
let currentDate = `${month} ${day}, ${year}`;
$(".current-date").text(currentDate);

if (month == "April" && day == 13) {
  $(".birthday").text("Happy Birthday Greg!");
}

//Create New task on list

function addTask() {
  if (inputBox.value == " ") {
    alert("Please type in a task!");
  } else {
    let task = document.createElement("li");
    task.innerHTML = input.value;
    listContainer.appendChild(task);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    task.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
