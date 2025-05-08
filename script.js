// Lightbox functionality
const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = thumbnail.src; // Set the full image source
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none'; // Close the lightbox
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none'; // Close the lightbox if the overlay is clicked
  }
});
