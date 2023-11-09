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
  const instance = basicLightbox.create(`
  	<div class="modal">
        <img class="gallery__link" src="${"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg"}" alt="#{description}" />
      </div>
  `);
  instance.show();
}

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, description }) => `
  <li class="item gallery__item">
  <img class="gallery__image" src="${preview}" alt="${description}" width="300">
  </li>`
    )
    .join("");
}

console.log(createMarkup(galleryItems));

// console.log(galleryItems);
