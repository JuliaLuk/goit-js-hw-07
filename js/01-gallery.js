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

  const instance = basicLightbox.create(`
  	<div class="modal">
        <img class="gallery__link" src="${event.target.dataset.source}" alt="{description}" />
      </div>
  `);
  instance.show();
}

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
  <li class="item gallery__item">
  <img class="gallery__image" src="${preview}" alt="${description}" data-source = "${original}"width="300">
  </li>`
    )
    .join("");
}

// console.log(createMarkup(galleryItems));

// console.log(galleryItems);
