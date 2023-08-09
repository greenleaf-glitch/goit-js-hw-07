import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  galleryUL: document.querySelector(".gallery"),
};

const markup = galleryItems
  .map(({ original, preview, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image"
      src="${preview}"
      alt="${description}" />
   </a>
   </li>`;
  })
  .join("");

refs.galleryUL.insertAdjacentHTML("afterbegin", markup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  loop: true,
});
