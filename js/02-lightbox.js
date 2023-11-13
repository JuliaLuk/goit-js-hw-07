import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imgGallery = document.querySelector(".gallery");
// console.log(imgGallery);

imgGallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

imgGallery.addEventListener("click", handelClick);

function handelClick(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  console.log(event.currentTarget);

  const instance = simplelightbox.create(`
  	<div class="modal">
        <img
        class="gallery__link"
        data-lightbox ="lbox"
        data-src="${event.target.dataset.source}" 
        alt="{description}"/>
      </div>
  `);
  instance.show();

  // imgGallery.addEventListener("keydown", closePicture);
  // function closePicture(event) {
  //   if (event.code === "Escape") {
  //     instance.close();
  //   }
  // }
}

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
  <li class="item gallery__item">
   <a class="gallery__link">
  <img
  class="gallery__image lazyload"
  src="${preview}" 
  alt="${description}" 
  data-source = "${original}" 
  width="300">
  </a>
  </li>`
    )
    .join("");
}

// console.log(createMarkup(galleryItems));

// console.log(galleryItems);
