//#region HTML Elements

const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input")
const greeting = document.querySelector("#greeting");

//#endregion

//#region Constants

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//#endregion

//#region Event Listener

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}!`;
}

//#endregion

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null || savedUsername == "") {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${savedUsername}!`;
}
