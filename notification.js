document.getElementById('back-icon').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    window.location.href = 'main_page.html';
});

document.querySelectorAll('.notification').forEach(item => {
    item.addEventListener('click', () => {
        const text = item.querySelector('.notification-text');
        if (text.style.webkitLineClamp === "2") {
            text.style.webkitLineClamp = "none";
        } else {
            text.style.webkitLineClamp = "2";
        }
    });
});
function showFullMessage(notificationElement) {
    const fullMessage = notificationElement.querySelector('.full-message');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    overlay.style.display = 'block';
    fullMessage.style.display = 'block';

    overlay.onclick = function() {
        fullMessage.style.display = 'none';
        overlay.remove();
    }
}

document.getElementById('lang-toggle').addEventListener('change', function() {
    const isChecked = this.checked; // true if Bangla, false if English
    const texts = document.querySelectorAll('.lang-text');

    texts.forEach(text => {
        if (isChecked) {
            // Switch to Bangla
            text.innerText = text.getAttribute('data-lang-bn');
        } else {
            // Switch to English
            text.innerText = text.getAttribute('data-lang-en');
        }
    });
});