const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];

let activeId = null;

const lightbox = document.getElementById("lightbox");
const previewImg = document.getElementById("preview-image");
const modalImages = document.querySelectorAll(".lightbox__images img");

function openModal(imgId) {
  if (activeId !== null) {
    modalImages[activeId].classList.remove("active");
  }

  activeId = imgId;

  lightbox.classList.add("visible");

  previewImg.src = images[imgId];

  modalImages[imgId].classList.add("active");
}

function control(direction) {
  const prevId = activeId;
  if (direction === 1) {
    // next
    activeId = (activeId + 1) % images.length;
  } else {
    // previous
    activeId = (activeId - 1 + images.length) % images.length;
  }

  previewImg.src = images[activeId];
  modalImages[activeId].classList.add("active");
  modalImages[prevId].classList.remove("active");
}

function closeModal() {
  lightbox.classList.remove("visible");
}

modalImages.forEach((imageElement, i) => {
  imageElement.src = images[i];
  imageElement.addEventListener("click", () => openModal(i));
});
