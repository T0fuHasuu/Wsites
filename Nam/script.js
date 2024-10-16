// Create snowflake effect
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 and 5 seconds
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';

    document.querySelector('.snow-container').appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000); // snowflake removed after 5 seconds
}

setInterval(createSnowflake, 200); // Creates a new snowflake every 200ms

// Optional: Adjust snowflake effect speed when window is resized
window.addEventListener('resize', () => {
    const snowflakes = document.querySelectorAll('.snowflake');
    snowflakes.forEach(flake => flake.style.left = Math.random() * window.innerWidth + 'px');
});