var images = ["img/FoundationChurch.webp", "img/Dom.webp", "img/Soccer.webp", "img/Train Arrival.webp", "img/Train Station.webp",  "img/Art Museum Alley.webp", "img/Art Museum.webp", "img/Parisian Bar.webp", "img/Portrait Body Builder.webp","img/Alley Life.webp", "img/Alley Porsche.webp", "img/Grafiti.webp", "img/Parisian Cafe.webp", "img/Mannequin Reflections.webp", "img/Mannequin Face.webp", "img/Portrait Waiter.webp", "img/Tram Strasbourg.webp"]; // your image sources
var currentImage = 0;

// Function to navigate to the next image
function nextImage() {
  applyBlurAndShowSpinner();
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  loadImage(images[currentImage]);
}

// Function to navigate to the previous image
function prevImage() {
  applyBlurAndShowSpinner();
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  loadImage(images[currentImage]);
}

// Function to apply blur and show loading spinner
function applyBlurAndShowSpinner() {
  $('.myImages').addClass('blur');
  $('.loading-spinner').show();
}

// Function to show loading spinner
function showLoadingSpinner() {
  $('.loading-spinner').show();
}

// Function to hide loading spinner and remove blur
function hideLoadingSpinner() {
  $('.loading-spinner').hide();
  $('.myImages').removeClass('blur');
}

// Function to load image with spinner
function loadImage(src) {
  const img = new Image();
  img.onload = function() {
    $('.myImages').attr('src', src);
    // Short delay to ensure the new image is displayed before removing blur
    setTimeout(function() {
      hideLoadingSpinner();
    }, 100);
  };
  img.onerror = function() {
    hideLoadingSpinner();
    console.error('Failed to load image:', src);
  };
  img.src = src;
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

  // Hide spinner initially and load first image
  hideLoadingSpinner();
  $('.myImages').on('load', hideLoadingSpinner);
});
