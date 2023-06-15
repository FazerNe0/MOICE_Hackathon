// Automatic image slider
var slideIndex = 0;

function showSlides() {
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change slide every 3 seconds (adjust as needed)
}

// Run the slider function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  showSlides();
});
