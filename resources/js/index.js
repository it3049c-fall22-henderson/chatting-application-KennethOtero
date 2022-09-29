// Create variables
// const { update } = require("lodash");
const nameInput = document.getElementById("my-name-input");
const myMessage = document.getElementById("my-message");
const sendButton = document.getElementById("send-button");
const chatBox = document.getElementById("chat");

// Get the messages
const serverURL = 'https://it3049c-chat-application.herokuapp.com/messages';
function fetchMessages() {
  return fetch(serverURL).then(response => response.json());
}

// Format all the messages
function formatMessage(message, myNameInput) {
  const time = new Date(message.timestamp);
  const formattedTime = `${time.getHours()}:${time.getMinutes()}`;

  if (myNameInput === message.sender) {
    return `
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
    return `
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
async function updateMessages() {
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
// setInterval(updateMessages, MILLISECONDS_IN_TEN_SECONDS);

// Send messages
function sendMessages(username, text) {
  const newMessage = {
    sender: username,
    text: text,
    timestamp: new Date()
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

// =========== Module 6 Changes =========== //

// Get document content
const saveNameButton = document.getElementById('save-name');
const messageInput = document.getElementById('messageInput');
const darkModeButton = document.getElementById('dark-mode');

// Save name to local storage. Any time a user decides to hit the save button after creating a name,
// their name will be updated to whatever text is in the text box.
saveNameButton.addEventListener("click", function() {
  localStorage.setItem('name', nameInput.value);
});

// Hide messages until name is stored in local storage.
// Runs an update on local storage every 100ms.
setInterval(function() {
  if (!localStorage.getItem('name')) {
    messageInput.classList.add('d-none');
  } else {
    messageInput.classList.remove('d-none');
  }
}, 100);