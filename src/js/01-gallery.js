// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector("ul.gallery");

const photosMarkup = createGalleryItem(galleryItems);

function createGalleryItem(array) {
   return array
   .map(({ preview, original, description }) => {
        return `
        <a class='gallery_item' href="${original}">
            <img class="gallery_image" src="${preview}" alt="${description}"/>
        </a>
        `;
    })

    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", photosMarkup);

const galleryHandler = new simpleLightbox(".gallery a", { captionsData: "alt", captionsDelay: 250});
console.log(galleryHandler);
