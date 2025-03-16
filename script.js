//getting modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

//adding click event to each image
document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", () => {
    console.log("Image clicked:", img.src);
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});
//closing modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
//closing the modal on clicking outside the image
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
