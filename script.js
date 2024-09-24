document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-music');
    audio.volume = 0.03; // Set volume to 1%

    // Play button functionality
    document.getElementById('playButton').addEventListener('click', function() {
        document.getElementById('prompt').style.display = 'none'; // Hide the prompt
        document.getElementById('content').style.display = 'flex'; // Show the content
        audio.currentTime = 2;
        audio.play().catch(function(error) {
            console.log('Error playing music:', error);
        });
    });

    // Continue button functionality
    document.getElementById('continueButton').addEventListener('click', function() {
        window.location.href = 'homepage.html';  // Replace 'homepage.html' with your actual homepage URL
    });

    // Close button functionality
    document.getElementById('closeButton').addEventListener('click', function() {
        audio.pause(); // Pause the audio
        window.location.href = 'homepage.html';  // Replace 'homepage.html' with your actual homepage URL
    });
});
