// Function to load a random background image
function loadRandomBackgroundImage() {
    var imageUrls = [
        "bg1",
        "bg2"
    ];
    
    // Get a random index from the array
    var randomIndex = Math.floor(Math.random() * imageUrls.length);
    
    // Set the random background image class
    var backgroundImageClass = imageUrls[randomIndex];

    // Apply the background image to the appropriate element
    var sideBackground = document.querySelector(".side-image");
    sideBackground.classList.add(backgroundImageClass);
    
}

loadRandomBackgroundImage();

