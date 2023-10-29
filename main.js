var affirmationButton = document.querySelector('#affirmation-button');
var mantraButton = document.querySelector('#mantra-button');
var createMessageButton = document.querySelector('.submit-button');
var messagesSection = document.querySelector('.messages-section')
var bellImage = document.querySelector('#bell')
var clearMessageButton;
var message;
var messageType;
createMessageButton.addEventListener('click', createMessage);




function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function createMessage() {
    event.preventDefault();
    if (affirmationButton.checked) {
        message = affirmations[getRandomIndex(affirmations)];
        messageType = 'Affirmation'
    } else if (mantraButton.checked) {
        message = mantras[getRandomIndex(mantras)];
        messageType = 'Mantra'
    } else {
        alert('Please Select a message type');
        return;
    }
    messagesSection.innerHTML = `
    <section class="new-message">
      <h2>${message}</h2>
      <button id="clear-message">Clear ${messageType}</button>
    </section>`;
    clearMessageButton = document.querySelector('#clear-message')
    clearMessageButton.addEventListener('click', clearMessage);
}

function clearMessage() {
    messagesSection.innerHTML = `
    <img id="bell" src="assets/meditate.svg" alt="meditation-bell"> `;
}