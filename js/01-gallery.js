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

function onGalleryClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  modalImg(event.target.dataset.source);
}
let instance;
function modalImg(source) {
  instance = basicLightbox.create(
    `  
  <div class="modal">
       <img src="${source}" style="height:100vh; display:block"></img>
  </div>
`,
    {
      onShow: instance => {
        addListener();
      },
      onClose: instance => {
        removeListener();
      },
    }
  );
  instance.show();
  // escapeOut(instance);
}

function escapeOut(event) {
  // document.addEventListener("keydown", (event) => {
    if (event.code === 'Escape') {
      instance.close();
    }
  // });
}
function addListener() {
  window.addEventListener("keydown", escapeOut);
}
function removeListener() {
  window.removeEventListener("keydown", escapeOut);
}
