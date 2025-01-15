const username = localStorage.getItem("username");
const welcomeMessage = document.getElementById("welcome-message");

if (username) {
    welcomeMessage.textContent = `Hello, ${username}!`;
} else {
    welcomeMessage.textContent = "Welcome, Guest!";
}

let canSendMessage = true;
const messageForm = document.getElementById("chat-form");
const messageInput = document.getElementById("message-input");
const sendButton = document.querySelector("button");
const delayWarning = document.createElement("p");
delayWarning.style.color = "red";
messageForm.appendChild(delayWarning);

messageForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (canSendMessage) {
        const message = messageInput.value.trim();

        if (message === "") {
            return;
        }

        displayMessage(username, message);

        canSendMessage = false;
        delayWarning.textContent = "Please wait 2 seconds before sending another message.";

        messageInput.value = "";

        setTimeout(() => {
            canSendMessage = true;
            delayWarning.textContent = "";
        }, 2000);
    } else {
        delayWarning.textContent = "You are sending messages too quickly! Please wait a moment.";
    }
});

function displayMessage(user, message) {
    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message");

    messageContainer.textContent = `${user}: ${message}`;
    document.getElementById("chat-display").appendChild(messageContainer);

    const chatDisplay = document.getElementById("chat-display");
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
}
