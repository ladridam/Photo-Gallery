//getting modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");
const galleryImages = document.querySelectorAll(".gallery img");

let currentIndex = 0;

// openning modal on click
galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
      currentIndex = index;
      openModal(img);
  });
});

function openModal(img) {
  modal.style.display = "flex";
  modalImg.src = img.src;
  modalImg.alt = img.alt;
}

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal on outside click
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
      modal.style.display = "none";
  }
});

// Keyboard navigation for modal
document.addEventListener("keydown", (e) => {
  if (modal.style.display === "flex") {
      if (e.key === "ArrowRight") {
          currentIndex = (currentIndex + 1) % galleryImages.length;
          openModal(galleryImages[currentIndex]);
      } else if (e.key === "ArrowLeft") {
          currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
          openModal(galleryImages[currentIndex]);
      } else if (e.key === "Escape") {
          modal.style.display = "none";
      }
  }
});

// Filter/Search functionality
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const filter = searchInput.value.toLowerCase();
  galleryImages.forEach((img) => {
      const altText = img.alt.toLowerCase();
      if (altText.includes(filter)) {
          img.style.display = "block";
      } else {
          img.style.display = "none";
      }
  });
});
