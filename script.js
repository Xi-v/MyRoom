document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const errorMessageContainer = document.getElementById("error-message");

    const errorMessages = [
        "Username is required, idiot.",
        "Come on, enter a username!",
        "You need a username to continue!",
        "Don't leave me hanging, give me a username.",
        "Seriously? A username is required!",
        "Can you seriously not enter a username?",
        "It's not that hard, just type something simple",
        "That's just lazy of you",
        "Bro, type the username already",
        "What a waste of your time, not mine, I'm a website!",
        "Okay, so here's the deal you enter the username, we're both happy",
        "username.",
        "enter username",
        "i'm bored",
        "i could have some food right now",
        "tormenting won't work, i'm a website...",
        "Please",
        "Hurry Up!",
        "I actually get tickled when you press the enter button",
        "Just remember I use your cookies... be warned.",
        "That tiCKles.. *hehe*",
    ];

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = usernameInput.value.trim();
        if (username) {
            localStorage.setItem("username", username);
            window.location.href = "chatroom.html";
        } else {
            // Randomize error message
            const randomErrorMessage = errorMessages[Math.floor(Math.random() * errorMessages.length)];
            errorMessageContainer.textContent = randomErrorMessage;
        }
    });
});
