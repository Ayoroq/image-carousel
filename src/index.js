// get the next and previous buttons
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

// get the carousel images
const images = document.querySelectorAll('.carousel img');
const dots = document.querySelectorAll('.dot');


// function to loop through the dots and images to show the current dot and image
let currentIndex = 0;

function updateImagesAndDots() {
  images.forEach((img, index) => {
    img.classList.toggle('hidden', index !== currentIndex);
  });
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}


// function to show the next image
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImagesAndDots();
}

// function to show the previous image
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImagesAndDots();
}

// add event listeners to the buttons
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// initialize the first image
updateImagesAndDots();

// function to update the displayed image after 5 seconds
// setInterval(() => {
//   nextImage();
// }, 5000);