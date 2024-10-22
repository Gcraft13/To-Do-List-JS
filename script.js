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

const date = new Date();

let day = date.getDate();
let month = monthName[date.getMonth()];
let year = date.getFullYear();
let currentDate = `${month} ${day}, ${year}`;
$(".current-date").text(currentDate);
