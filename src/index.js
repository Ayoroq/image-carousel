// get the next and previous buttons
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

// get the carousel images
const images = document.querySelectorAll('.carousel img');
const dots = document.querySelectorAll('.dot');


// function to loop through the dots and images to show the current dot and image
let currentImageIndex = 0;

function updateImagesAndDots() {
  images.forEach((img, index) => {
    img.classList.toggle('hidden', index !== currentImageIndex);
  });
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentImageIndex);
  });
}


// function to show the next image
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  const image = images[currentImageIndex];
  updateImagesAndDots();
}

// function to show the previous image
function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateImagesAndDots();
}

// function to switch to a specific image when a dot is clicked
function dotClick(index) {
  currentImageIndex = index;
  updateImagesAndDots();
}

// add event listeners to the buttons
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);
// add event listeners to the dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    dotClick(index);
  });
});

// initialize the first image
function initializeCarousel() {
  updateImagesAndDots();
  setInterval(nextImage, 5000);
}

initializeCarousel();