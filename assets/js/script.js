const mario = document.getElementById('mario');
const marioCoin = document.getElementById('marioCoin');
const coinSound = new Audio('coin.mp3');

// Event listener for Mario's click event
mario.addEventListener('click', () => {
    // Adding jumping class for animation yipee
    mario.classList.add('jumping');
    // Removing jumping class after 1 second to reset animation
    setTimeout(() => {
        mario.classList.remove('jumping');
    }, 1000);

    // Simulate hitting the box and making the coin appear
    setTimeout(() => {
        marioCoin.style.opacity = 1;
        coinSound.play(); // Play the coin sound
        // Coin disappears after 1 second
        setTimeout(() => {
            marioCoin.style.opacity = 0;
        }, 1000);
    }, 500); // Delay before animation starts
});
