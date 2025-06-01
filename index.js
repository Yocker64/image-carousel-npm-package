function createImageCarousel(images) {
// Build carousel

const carousel = document.createElement("div");
carousel.className = "carousel";

const track = document.createElement("div");
track.className = "carousel-track";

images.forEach(src => {
  const slide = document.createElement("div");
  slide.className = "carousel-slide";
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Carousel Image";
  slide.appendChild(img);
  track.appendChild(slide);
});

const prevButton = document.createElement("button");
prevButton.className = "carousel-button prev";
prevButton.innerHTML = "&#10094;";

const nextButton = document.createElement("button");
nextButton.className = "carousel-button next";
nextButton.innerHTML = "&#10095;";

carousel.appendChild(prevButton);
carousel.appendChild(track);
carousel.appendChild(nextButton);


// Carousel logic
let currentIndex = 0;
const updateCarousel = () => {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
};

prevButton.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
};

nextButton.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
};
 return carousel;
}


function injectCarouselStyles() {
  // Inject styles
const style = document.createElement("style");
style.textContent = `
  body {
    margin: 0;
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f0f0f0;
  }

  .carousel {
    position: relative;
    width: 600px;
    height: 400px;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    background: white;
  }

  .carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
    height: 100%;
  }

  .carousel-slide {
    min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-slide img {
    width: 80%;
    height: auto;
    object-fit: contain;
  }

  .carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    background: rgba(0, 0, 0, 0.3);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    z-index: 10;
    border-radius: 50%;
    transition: background 0.3s;
  }

  .carousel-button:hover {
    background: rgba(0, 0, 0, 0.6);
  }

  .carousel-button.prev {
    left: 10px;
  }

  .carousel-button.next {
    right: 10px;
  }
`;
document.head.appendChild(style);
}

module.exports = {
  createImageCarousel,
  injectCarouselStyles
};
