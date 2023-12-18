var images = ["img/FoundationCurch.png", "img/Dom.png", "img/Soccer.png", "img/Train Arrival.png", "img/Train Station.png",  "img/Art Museum Alley.png", "img/Art Museum.png", "img/Parisian Bar.png", "img/Portrait Body Builder.png","img/Alley Life.png", "img/Alley Porsche.png", "img/Grafiti.png", "img/Parisian Cafe.png", "img/Mannequin Reflections.png", "img/Mannequin Face.png", "img/Portrait Waiter.png", "img/Tram Strasbourg.png"]; // your image sources
var currentImage = 0;

$(document).keydown(function (e) {
  if (e.keyCode === 39) { // Right arrow
    currentImage++;
    if (currentImage >= images.length) {
      currentImage = 0;
    }
    $('.myImages').attr('src', images[currentImage]);
  }
  if (e.keyCode === 37) { // Left arrow
    currentImage--;
    if (currentImage < 0) {
      currentImage = images.length - 1;
    }
    $('.myImages').attr('src', images[currentImage]);
  }

});
