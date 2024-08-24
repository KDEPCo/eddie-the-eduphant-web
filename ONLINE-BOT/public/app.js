document.getElementById('sendMessage').addEventListener('click', async () => {
    const messageInput = document.getElementById('messageInput');
    const userMessage = messageInput.value.trim();
    if (!userMessage) return;

    // Append user message to the chat
    const chat = document.getElementById('chat');
    chat.innerHTML += `<div class="message user-message">${userMessage}</div>`;
    messageInput.value = '';

    // Send user message to the server
    const response = await fetch('/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
    });

    const responseData = await response.json();

    // Append assistant response to the chat
    chat.innerHTML += `<div class="message assistant-message">${responseData.reply}</div>`;
    chat.scrollTop = chat.scrollHeight; // Scroll to the bottom
});