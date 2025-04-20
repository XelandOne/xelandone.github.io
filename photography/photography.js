var images = ["img/FoundationChurch.webp", "img/Dom.webp", "img/Soccer.webp", "img/Train Arrival.webp", "img/Train Station.webp",  "img/Art Museum Alley.webp", "img/Art Museum.webp", "img/Parisian Bar.webp", "img/Portrait Body Builder.webp","img/Alley Life.webp", "img/Alley Porsche.webp", "img/Grafiti.webp", "img/Parisian Cafe.webp", "img/Mannequin Reflections.webp", "img/Mannequin Face.webp", "img/Portrait Waiter.webp", "img/Tram Strasbourg.webp"]; // your image sources
var currentImage = 0;

// Function to navigate to the next image
function nextImage() {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  $('.myImages').attr('src', images[currentImage]);
}

// Function to navigate to the previous image
function prevImage() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  $('.myImages').attr('src', images[currentImage]);
}

// Keyboard navigation
$(document).keydown(function (e) {
  if (e.keyCode === 39) { // Right arrow
    nextImage();
  }
  if (e.keyCode === 37) { // Left arrow
    prevImage();
  }
});

// Button navigation
$(document).ready(function() {
  $('#next-btn').click(function() {
    nextImage();
  });
  
  $('#prev-btn').click(function() {
    prevImage();
  });
});
