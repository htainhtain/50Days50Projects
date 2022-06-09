// week days
const weekdays = new Array(7);
weekdays[0] = "Sunday";
weekdays[1] = "Monday";
weekdays[2] = "Tuesday";
weekdays[3] = "Wednesday";
weekdays[4] = "Thursday";
weekdays[5] = "Friday";
weekdays[6] = "Saturaday";

// months
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let timeDom = document.querySelector(".container .time");
let dateDom = document.querySelector(".container .date");

let secondDom = document.querySelector(".container .watch .second");
let minuteDom = document.querySelector(".container .watch .minute");
let hourDom = document.querySelector(".container .watch .hour");

let themeButton = document.querySelector(".theme button");

let bodyDom = document.querySelector("body");

themeButton.addEventListener("click", () => { 
  bodyDom.classList.toggle("black");
  themeButton.innerHTML = bodyDom.classList.contains("black") ? "Light Mode" : "Dark Mode";
})


const updateDay = () => {
  let today = new Date();
  let today_day = weekdays[today.getDay()];
  let today_month = months[today.getMonth()];

  //hour and minute
  let today_hour = today.getHours();
  let today_minute = today.getMinutes();
  today_minute = today_minute <= 9 ? "0" + today_minute : today_minute;
  let amPm = today_hour >= 12 ? "PM" : "AM";
  today_hour = today_hour % 12;
  today_hour = today_hour === 0 ? 12 : today_hour;

  timeDom.innerHTML = `${today_hour}:${today_minute} ${amPm}`;
  dateDom.innerHTML = `${today_day}, ${today_month} <span>${today.getDate()}</span>`;

  let today_second = today.getSeconds();
  secondDom.style.webkitTransform = "rotate(" + today_second * 6 + "deg)";

  minuteDom.style.webkitTransform = "rotate(" + today_minute * 6 + "deg)";

  hourDom.style.webkitTransform = "rotate(" + today_hour * 30 + "deg)";
};

setInterval(updateDay, 1000);
