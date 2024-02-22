const loginForm = document.querySelector("#login-form");
const inputName = loginForm.querySelector("input");
const greetings = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedName = localStorage.getItem(USERNAME_KEY);
if (savedName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", submitHandler);
} else {
    paintGreetings(savedName);
}

function submitHandler(event) {
    event.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = inputName.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greetings.innerText = `Hello ${username}`;
    greetings.classList.remove(HIDDEN_CLASSNAME);
}
