document.getElementById("send-button").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", function (event) {
    // If the Enter key (key code 13) is pressed
    if (event.key === "Enter") {
        sendMessage();
    }
});

async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") {
        alert("Please type a message.");
        return;
    }

    // Append the user's message to the chat box
    appendMessage("You: " + userInput);

    // Send the message to the Flask server for sentiment analysis
    const response = await fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
    });

    const data = await response.json();
    const botResponse = data.response;
    const sentiment = data.sentiment;
    const scores = data.scores;

    // Display the chatbot's response
    appendMessage("Bot: " + botResponse);

    // Display sentiment info
    displaySentimentInfo(sentiment, scores);

    // Clear the input field after sending the message
    document.querySelector("#user-input").value = "";
}

// Function to append messages to the chat box
function appendMessage(message) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Function to display sentiment and scores
function displaySentimentInfo(sentiment, scores) {
    const sentimentInfo = document.getElementById("sentiment-info");
    sentimentInfo.innerHTML = `
        <strong>Sentiment:</strong> ${sentiment} <br>
        <strong>Sentiment Scores:</strong><br>
        Negative: ${scores.neg} <br>
        Neutral: ${scores.neu} <br>
        Positive: ${scores.pos} <br>
        Compound: ${scores.compound}
    `;
}
