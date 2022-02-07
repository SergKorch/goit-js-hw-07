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
  console.log(event.target.src);
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  const instance = basicLightbox.create(`
    
    <div class="modal">
        // <img src="${event.target.dataset.source}" style="height:50vh; display:block"></img>
    </div>
`);
  console.log(event.target.dataset.source);
  instance.show();
}

// function onGalleryClick(event) {
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }
//   event.preventDefault();
//   modalShow(event.target.dataset.source);
// }
// let instance;

// function modalShow(src) {
//   instance = basicLightbox.create(
//     `
//     <div class="modal">
//         <img src="${src}" style="height:50vh; display:block"></img>
//     </div>
// `,
//     {
//       onShow: (instance) => {
//         addListener();
//       },
//       onClose: (instance) => {
//         removeListener();
//       },
//     }
//   );
//   instance.show();
// }

// function addListener() {
//   window.addEventListener("keydown", onEscClick);
// }

// function onEscClick(event) {
//   if (event.code === "Escape") {
//     instance.close();
//   }
// }

// function removeListener() {
//   window.removeEventListener("keydown", onEscClick);
// }
