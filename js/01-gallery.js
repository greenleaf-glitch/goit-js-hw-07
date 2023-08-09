import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  galleryUL: document.querySelector(".gallery"),
};

const markup = galleryItems
  .map((item) => {
    return `<li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>`;
  })
  .join("");

refs.galleryUL.insertAdjacentHTML("afterbegin", markup);

refs.galleryUL.addEventListener("click", onImgClick);

function onImgClick(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) return;

  const bigImgURL = event.target.dataset.source;
  const modalWindow = basicLightbox.create(`
    <div class="modal">
        <img
          src="${bigImgURL}"
        />
    </div>
`);

  modalWindow.show();

  refs.galleryUL.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    modalWindow.close();
    refs.galleryUL.removeEventListener("keydown", {});
  });
}
