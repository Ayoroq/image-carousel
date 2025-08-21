// get the next and previous buttons
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

// get the carousel images
const images = document.querySelectorAll('.carousel img');

// to loop through the images and show the current image
let currentIndex = 0;

function updateImage() {
  images.forEach((img, index) => {
    img.classList.toggle('hidden', index !== currentIndex);
  });
}
// function to show the next image
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

// function to show the previous image
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

// add event listeners to the buttons
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// initialize the first image
updateImage();

// function to update the displayed image after 5 seconds
setInterval(() => {
  nextImage();
}, 5000);
