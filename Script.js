document.getElementById('noButton').addEventListener('click', function() {
    // Implement any transition or animation for 'No' button if needed
});

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('lovePoetry').style.display = 'block';
    document.body.style.backgroundImage = 'none'; // Remove background image if needed
    document.getElementById('backgroundMusic').play();
    // Implement falling heart emojis animation if desired
});
