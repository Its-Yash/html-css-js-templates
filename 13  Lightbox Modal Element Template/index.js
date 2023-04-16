const IMAGE0 =
  "https://images.unsplash.com/photo-1681559477628-3e94ffc9d36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
const IMAGE1 =
  "https://images.unsplash.com/photo-1681559513190-cfaffc55639a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
const IMAGE2 =
  "https://images.unsplash.com/photo-1681493920935-27cb0722b791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=649&q=80";
const IMAGE3 =
  "https://images.unsplash.com/photo-1681237264936-0b588fba83dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=790&q=80";

const images = [IMAGE0, IMAGE1, IMAGE2, IMAGE3];

const image0 = document.getElementById("image0");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

const lightbox = document.getElementById("lightbox");

const previewImg = document.getElementById("preview-image");

const modalImagesBlock = document.getElementById("modal-images-block");

image0.src = IMAGE0;
image1.src = IMAGE1;
image2.src = IMAGE2;
image3.src = IMAGE3;

let activeId = null;
previewImg.src = images[0];

const modalImagesElements = modalImagesBlock.getElementsByTagName("img");

const modalImages = Object.values(modalImagesElements);

modalImages.forEach((imageElement, i) => {
  console.log(imageElement);
  imageElement.src = images[i];
});

function openModal(imgId) {
  if (activeId !== null) {
    modalImages[activeId].classList.remove("active");
  }

  activeId = imgId;

  lightbox.classList.add("visible");

  previewImg.src = images[imgId];

  modalImages[imgId].classList.add("active");
}

function closeModal() {
  lightbox.classList.remove("visible");
}

function control(direction) {
  const prevId = activeId;
  if (direction === 1) {
    // next
    activeId =
      activeId + 1 > images.length - 1
        ? // then go to the beginning
          (activeId = 0)
        : (activeId = activeId + 1);
  } else {
    // previous
    activeId =
      activeId - 1 < 0
        ? // then go to the end
          (activeId = images.length - 1)
        : activeId - 1;
  }

  previewImg.src = images[activeId];
  modalImages[activeId].classList.add("active");
  modalImages[prevId].classList.remove("active");
}

/*
Better JS code 

const images = [
"image1.jpg",
"image2.jpg",
"image3.jpg",
"image4.jpg"
];

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


Changes made We declared the images array and the activeId variable using const and let, respectively, to follow best practices for variable declaration.
We used querySelectorAll to select all the modal images at once, instead of selecting them one by one with their IDs.
We used forEach to loop through the modal images and set their src attributes and click event listeners in a more concise way.
We simplified the control function by using the modulo operator (%) to wrap around the activeId value when it goes beyond the images array bounds.
We added some CSS styles to make the images and lightbox look nicer and more responsive.
*/
