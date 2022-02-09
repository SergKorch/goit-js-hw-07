import { galleryItems } from "./gallery-items.js";
// Change code below this line
const makeGalleryElements = ({ preview, original, description }) => {
  return `<div class="gallery__item">
    <a class="gallery__link" href="${original} target="_self">
      <img
        class="gallery__image"
        style="display:block"
        data-lightbox="roadtrip"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
    `;
};
const makeGalleryMarkup = galleryItems.map(makeGalleryElements).join("");
const galleryElements = document.querySelector(".gallery");
galleryElements.insertAdjacentHTML("beforeend", makeGalleryMarkup);
galleryElements.addEventListener("click", onGalleryClick);

const instance = basicLightbox.create(
  `  
     <img src="" class="modal" style="height:100vh; display:block"></img>
`,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", escapeOut);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", escapeOut);
    },
  }
);

function onGalleryClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  instance.element().querySelector(".modal").src = event.target.dataset.source;
  instance.show();
}

function escapeOut(event) {
  if (event.code === "Escape") {
    instance.close();
    return;
  }
}
