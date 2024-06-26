import imageData from "../data/gallery.json";
import SimpleLightbox from "simplelightbox";

function markupImages(images) {
  return images
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery-item"> <a href="${original}" class="big gallery-link"><img src="${preview}" alt="" title="${description}" class="gallery-image"/></a> </li>`
    )
    .join("");
}

const galleryList = document.querySelector("#gallery");
galleryList.insertAdjacentHTML("beforeend", markupImages(imageData));
const gallery = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  overlayOpacity: 0.8,
  scrollZoom: false,
});
gallery.on("show.simplelightbox", function () {});