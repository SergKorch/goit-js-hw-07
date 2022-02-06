import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.table(galleryItems);
const listEl = galleryItems
  .map((item) => {
    return `<img src="${item.original}">`;
  })
  .join("");
console.log(listEl);
const listImg = document.querySelector('div[class="gallery"]');
console.log(listImg);
listImg.innerHTML = listEl;
listEl.classList.add("gallery__image");