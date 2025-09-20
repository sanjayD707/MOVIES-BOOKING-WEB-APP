let index = 0;
const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll(".slide").length;
const dotsContainer = document.querySelector(".dots");

// Create dots dynamically
for (let i = 0; i < slideCount; i++) {
  const dot = document.createElement("button");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dots button");

function updateSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Auto slide
let autoSlide = setInterval(() => {
  index = (index + 1) % slideCount;
  updateSlide();
}, 5000);


// Dot navigation
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateSlide();
    resetAutoSlide();
  });
});

// Reset auto-slide on manual action
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    index = (index + 1) % slideCount;
    updateSlide();
  }, 5000);
}
// Coming Soon "Book Now" Alert
document.addEventListener("DOMContentLoaded", () => {
  const comingSoonButtons = document.querySelectorAll(".comingsoon-btn");

  comingSoonButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("🚧 The movie is coming soon! Booking will be available later.");
    });
  });
});

// Future interactivity (filter, search, etc.) can go here
console.log("Movies page loaded!");
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
