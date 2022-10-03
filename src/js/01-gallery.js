// Add imports above this line
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
// console.log(simpleLightbox);
console.log(galleryItems);
console.log(createPhotosMarcup(galleryItems));

const galleryContainer = document.querySelector('.gallery');
const photosMarcup = createPhotosMarcup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', photosMarcup);

function createPhotosMarcup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href=${original}><img class="gallery__image" src="${preview}" alt="${description}"/></a>`;
    })
    .join('');
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
