import { galleryItems } from "./gallery-items.js";
// Change code below this line
const makeGalleryElements = ({ preview, original, description }) => {
  return `<li>
    <a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        style="display:block"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>
    `;
};
const makeGalleryMarkup = galleryItems.map(makeGalleryElements).join("");
const galleryElements = document.querySelector(".gallery");
galleryElements.insertAdjacentHTML("beforeend", makeGalleryMarkup);
let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
