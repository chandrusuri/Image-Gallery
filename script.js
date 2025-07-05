// 1. Lightbox functionality
const galleryItems = document.querySelectorAll('.image-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let currentIndex = 0;

galleryItems.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  lightboxImg.src = galleryItems[currentIndex].src;
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  lightboxImg.src = galleryItems[currentIndex].src;
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

// 2. Select Mode (like the Microsoft 'Select' Button)
let selectMode = false;
const selectBtn = document.querySelector('.toolbar button:nth-child(1)');

selectBtn.addEventListener('click', () => {
  selectMode = !selectMode;
  selectBtn.classList.toggle('active');

  if (selectMode) {
    selectBtn.textContent = "Cancel Select";
    galleryItems.forEach(img => img.classList.add('selectable'));
  } else {
    selectBtn.textContent = "Select";
    galleryItems.forEach(img => {
      img.classList.remove('selectable');
      img.classList.remove('selected');
    });
  }
});

galleryItems.forEach(img => {
  img.addEventListener('click', (e) => {
    if (selectMode) {
      e.stopPropagation();
      img.classList.toggle('selected');
    }
  });
});
