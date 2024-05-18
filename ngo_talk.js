document.getElementById('back-icon').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    window.location.href = 'main_page.html';
});

document.querySelectorAll('.entity').forEach(entity => {
    entity.addEventListener('click', function() {
        document.getElementById('ngo-name').textContent = this.querySelector('h4').textContent; // Set NGO name
        document.getElementById('chat-box').style.display = 'flex'; // Ensure display is set to flex
        document.getElementById('chat-box').style.transform = 'translateY(0)'; // Animate into view
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var messages = document.getElementById('messages');
    var botGreeting = document.createElement('div');

    // Predefined greeting message from the bot
    botGreeting.textContent = 'Bot: How can I help you?';
    botGreeting.style.color = 'green';
    messages.appendChild(botGreeting);

    document.getElementById('phone-icon').addEventListener('click', function() {
        window.location.href = 'tel:+01401083338';
    });

    document.getElementById('location-icon').addEventListener('click', function() {
        var ngoName = document.getElementById('ngo-name').textContent;
        var urlEncodedName = encodeURIComponent(ngoName);
        window.open(`https://www.google.com/maps/search/?api=1&query=${urlEncodedName}`, '_blank');
    });
});

document.getElementById('send-button').addEventListener('click', function() {
    var input = document.getElementById('chat-input');
    var userMessage = input.value.trim().toLowerCase();
    var messages = document.getElementById('messages');
    var newMessage = document.createElement('div');

    // Predefined responses based on user input
    var response = '';
    switch (userMessage) {
        case 'hello':
            response = 'Hi, how can I help you?';
            break;
         case 'hi':
                response = 'Hi, how can I help you?';
                break;           
        case 'bye':
            response = 'Goodbye! Have a great day!';
            break;
            case 'How are you':
                response = 'I am fine ! Hope you have a great day!';
                break;
        case 'thank you':
            response = 'You\'re welcome!';
            break;
        case 'tell me about gender equality':
            response = 'Gender equality is the state of equal ease of access to resources and opportunities regardless of gender.';
            break;
        case 'when is the next meetup of your ngo':
            response = 'The next meetup is on July 15th at 3 PM.';
            break;
        case 'what is the name of your ngo':
            response = 'Our NGO is Written Above.';
            break;
        case 'where is the location of your ngo':
            response = 'We are located at Kalshi Mor, Mirpur,Dhaka.';
            break;
            case 'where is your location':
                response = 'We are located at Kalshi Mor, Mirpur,Dhaka.';
                break;
            case 'thanks a lot':
                response = 'You\'re welcome!';
                break;
        default:
            response = 'Come to our office, and we will help you solve your problem.';
            break;
    }

    // Display user message
    newMessage.textContent = 'You: ' + input.value;
    newMessage.style.color = 'blue';
    messages.appendChild(newMessage);

    // Display bot response
    var botMessage = document.createElement('div');
    botMessage.textContent = 'Bot: ' + response;
    botMessage.style.color = 'green';
    messages.appendChild(botMessage);

    // Clear input after sending
    input.value = '';
});

document.getElementById('chat-back-button').addEventListener('click', function() {
    document.getElementById('chat-box').style.display = 'none'; // Hide the chat box
});

document.getElementById('phone-icon').addEventListener('click', function() {
    window.location.href = 'tel:+01401083338'; // Use the full phone number with country code if necessary
});

const textContent = {
    'Eng': 'Nearby NGOs - Feel Free to Talk',
    'Ban': 'কাছাকাছি এনজিও - নির্দ্বিধায় কথা বলুন'
};
document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('lang-toggle');

    langToggle.addEventListener('change', function() {
        const lang = langToggle.checked ? 'Ban' : 'Eng'; // Assuming 'Ban' is the right side (checked state)
        document.getElementById('ngoTitle').textContent = textContent[lang];
    });
});