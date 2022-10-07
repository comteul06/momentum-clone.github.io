//#region HTML Elements

const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input")
const greeting = document.querySelector("#greeting");

//#endregion

//#region Constants

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//#endregion

//#region Variables

const greetingWords = [
    {
        start: "What's up, ",
        end: "?"
    },
    {
        start: "Hey there, ",
        end: "!"
    },
    {
        start: "Having a nice day, ",
        end: "?"
    },
    {
        start: "Did you do well, ",
        end: "?"
    },
    {
        start: "Howdy do, ",
        end: "?"
    },
    {
        start: "Have a nice day, ",
        end: "!"
    },
    {
        start: "Hope you have a great day, ",
        end: "!"
    },
    {
        start: "A nice day for coding, ",
        end: "!"
    }
]

//#endregion

//#region EventListeners

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    const randomGreeting = greetingWords[Math.floor(Math.random() * greetingWords.length)];
    greeting.innerText = `${randomGreeting.start} ${username}${randomGreeting.end}`;
}

//#endregion

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null || savedUsername == "") {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
