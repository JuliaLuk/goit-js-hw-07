import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imgGallery = document.querySelector(".gallery");
// console.log(imgGallery);

const markup = galleryItems.map(
  ({ preview, description, original }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
);

imgGallery.insertAdjacentHTML("beforeend", markup.join(""));

new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
});
