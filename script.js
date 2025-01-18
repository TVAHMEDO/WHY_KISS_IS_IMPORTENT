const button = document.getElementById('heartButton');
const heartContainer = document.getElementById('heartContainer');

button.addEventListener('click', () => {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.textContent = '❤️';
    heartContainer.appendChild(heart);

    // Limit hearts
    if (heartContainer.children.length > 20) {
        heartContainer.removeChild(heartContainer.firstChild);
    }
});