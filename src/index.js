// get all carousel items
const imageList = [
  "/assets/man.jpg",
  "/assets/mod.jpg",
  "/assets/res.jpg",
  "/assets/tower.jpg",
  "/assets/wpt.jpg",
];

const transitionTime = 5000; // time in milliseconds
const totalImages = imageList.length;
let i = 0;

function addImageToCarousel(src) {
  const img = document.createElement("img");
  img.src = src;
  document.querySelector(".carousel").appendChild(img);
}

function removeImageFromCarousel() {
  const carousel = document.querySelector(".carousel");
  if (carousel.firstChild) {
    carousel.removeChild(carousel.firstChild);
  }
}

async function cycleImages(imageList, transitionTime) {
  do {
    for (let j = 0; j < totalImages; j++) {
      addImageToCarousel(imageList[j]);
      await new Promise(resolve => setTimeout(resolve, transitionTime));
      removeImageFromCarousel();
    }
  } while (2 > 1); // infinite loop for demonstration purposes
}

// start the carousel
cycleImages(imageList, transitionTime);

