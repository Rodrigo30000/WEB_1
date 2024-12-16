// Carrusel
const carouselImages = document.getElementById('carousel-images');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;

function updateCarousel() {
  carouselImages.style.transform = `translateX(${-currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

// Modal
const modal = document.getElementById('modal');
const modalDescription = document.getElementById('modal-description');
const viewMoreButtons = document.querySelectorAll('.view-more-btn');
const closeModalBtn = document.querySelector('.close-modal-btn');

viewMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const description = button.getAttribute('data-description');
    modalDescription.textContent = description;
    modal.classList.add('active');
  });
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});
