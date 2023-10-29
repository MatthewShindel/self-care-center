var affirmationButton = document.querySelector('#affirmation-button');
var mantraButton = document.querySelector('#mantra-button');
var createMessageButton = document.querySelector('.submit-button');
var messagesSection = document.querySelector('.messages-section')
var bellImage = document.querySelector('#bell')

var message;

createMessageButton.addEventListener('click',createMessage);

function getRandomIndex(array){
    return Math.floor(Math.random() * array.length);
}

function createMessage(){
    event.preventDefault();
    if (affirmationButton.checked){
        message = affirmations[getRandomIndex(affirmations)];
    }else if(mantraButton.checked){
        message = mantras[getRandomIndex(mantras)];
    }
    bellImage.classList.add('hidden')

    messagesSection.innerHTML += `
    <section class="message">
      <p>${message}</p>
      <button id=${Date.now()}>Clear Mantra</button>
    </section>`
}