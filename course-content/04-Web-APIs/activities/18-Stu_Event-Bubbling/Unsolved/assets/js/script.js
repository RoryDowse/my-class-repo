// TODO: Which element is the following line of code selecting?
const carousel = document.querySelector(".carouselbox"); // div
// TODO: Which element is the following line of code selecting?
const next = carousel.querySelector(".next"); // btn
const prev = carousel.querySelector(".prev");
let index = 0;
let currentImage;

const images = [
  "https://picsum.photos/id/10/300/200",
  "https://picsum.photos/id/20/300/201",
  "https://picsum.photos/id/30/300/202",
  "https://picsum.photos/id/47/300/203",
];

carousel.style.backgroundImage = "url('https://picsum.photos/id/10/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = `url('${currentImage}')`;
}

// TODO: Describe the functionality of the following event listener.
carousel.addEventListener("click", function () {
  window.location.href = images[index]; // accesses the hyperlink for the image and loops through
});

// TODO: Describe the functionality of the following event listener.
next.addEventListener("click", function (event) {
  // shows the next image when next is clicked
  // TODO: What is the purpose of the following line of code?
  // event.stopPropagation(); // stops the image from bubbling up - otherwise taken to image file path

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
prev.addEventListener("click", function (event) {
  // TODO: What would happen if we didn't add the following line of code?
  event.stopPropagation(); // same as above, but for previous img

  navigate(-1);
});

navigate(0);
