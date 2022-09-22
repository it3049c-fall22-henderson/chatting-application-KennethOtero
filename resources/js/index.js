// Create variables
const { update } = require("lodash");
const nameInput = document.getElementById("my-name-input");
const myMessage = document.getElementById("my-message");
const sendButton = document.getElementById("send-button");
const chatBox = document.getElementById("chat");

// Get the messages
function fetchMessages() {
  const serverURL = 'https://it3049c-chat-application.herokuapp.com/messages';
  return fetch(serverURL).then(response => response.json());
}

// Format all the messages
function formatMessage(message, myNameInput) {
  const time = new Date(message.timestamp);
  const formattedTime = `${time.getHours()}:${time.getMinutes()}`;

  if (myNameInput === message.sender) {
    return 
    `
    <div class="mine messages">
      <div class="message">
        ${message.text}
      </div>
      <div class="sender-info">
        ${formattedTime}
      </div>
    </div>
    `;
  } else {
    return 
    `
    <div class="yours messages">
      <div class="message">
        ${message.text}
      </div>
      <div class="sender-info">
        ${message.sender} ${formattedTime}
      </div>
    </div>
    `;
  }
}

// Update the messages inside the chatbox
async function updateMessagesInChatBox() {
  // Fetch messages
  const messages = await fetchMessages();

  // Loop over the messages. Inside the loop we will
    // Get each message
    // Format them
    // Add them to the chatbox
  let formattedMessages = "";
  messages.forEach(message => {
    formattedMessages += formatMessage(message, nameInput.value);
  });
  chatBox.innerHTML = formattedMessages;
}

// Update messages every 10 seconds
const MILLISECONDS_IN_TEN_SECONDS = 10000;
setInterval(updateMessagesInChatBox, MILLISECONDS_IN_TEN_SECONDS);

// Send messages
function sendMessages(username, text) {
  const newMessage = {
    sender: username,
    text: text,
    timestapm: new Date()
  }

  fetch(serverURL, {
    method: `POST`,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newMessage)
  }); 
}

// Send messages when the send button is clicked
sendButton.addEventListener("click", function(sendButtonClickEvent) {
  sendButtonClickEvent.preventDefault();
  const sender = nameInput.value;
  const message = myMessage.value;

  sendMessages(sender, message);
  myMessage.value = "";
});