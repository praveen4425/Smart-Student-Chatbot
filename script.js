const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

// Simple rule-based responses (frontend)
const responses = {
    "hello": "Hello! How can I help you today?",
    "homework": "Try breaking the problem into smaller parts and solve step by step.",
    "exam tips": "Make short notes and revise daily. Practice past questions.",
    "namaste": "Namaste! Kaise madad kar sakta hoon?",
    "default": "Sorry, I don't understand. Can you ask something else?"
};

// Send button event
sendBtn.addEventListener("click", () => {
    const message = userInput.value.trim();
    if (!message) return;

    addMessage(`You: ${message}`);
    
    // Get bot reply
    const key = message.toLowerCase();
    const reply = responses[key] || responses["default"];
    addMessage(`Bot: ${reply}`);

    // Optional Text-to-Speech
    const utterance = new SpeechSynthesisUtterance(reply);
    speechSynthesis.speak(utterance);

    userInput.value = "";
});

// Add message to chat box
function addMessage(text) {
    const div = document.createElement("div");
    div.textContent = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}
