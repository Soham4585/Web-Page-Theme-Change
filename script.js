const btn = document.getElementById('magic-btn');
const body = document.body;

// A simple function to toggle between vibrant themes
btn.addEventListener('click', () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const secondaryColor = Math.floor(Math.random()*16777215).toString(16);
    
    // Update the circles in the background dynamically
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        circle.style.background = `#${randomColor}`;
    });

    console.log("Theme updated to match your vibe!");
});

// Simple entry animation
window.onload = () => {
    const card = document.querySelector('.glass-card');
    card.style.opacity = '0';
    setTimeout(() => {
        card.style.transition = 'opacity 1s ease-in';
        card.style.opacity = '1';
    }, 100);
};