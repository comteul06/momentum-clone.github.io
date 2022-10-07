const clock = document.querySelector("#clock");
const clockTypeCheckbox = document.querySelector("span#clock-type input");

// 1 if 24, 0 if 12
const CLOCKTYPE_KEY = "clock-type";

function get24HourTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
}

function get12HourTime() {
    const date = new Date();

    const hourTemp = date.getHours();
    const hours = String(hourTemp > 12 ? hourTemp - 12 : hourTemp);

    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${hours}:${minutes}:${seconds} ${hourTemp > 12 ? "PM" : "AM"}`;
}

function paintClock() {
    clock.innerText = savedClockType == 1 ? get24HourTime() : get12HourTime();
}

function handleClockTypeCheckbox() {
    savedClockType = clockTypeCheckbox.checked ? 1 : 0;
    localStorage.setItem(CLOCKTYPE_KEY, savedClockType);
    paintClock();
}

let savedClockType = localStorage.getItem(CLOCKTYPE_KEY);
if (localStorage.getItem(CLOCKTYPE_KEY) == null) {
    localStorage.setItem(CLOCKTYPE_KEY, 1);
}

clockTypeCheckbox.checked = savedClockType == 1 ? true : false;
clockTypeCheckbox.addEventListener("change", handleClockTypeCheckbox);

paintClock();
setInterval(paintClock, 1000);
