import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const elements = galleryItems
  .map(({ original, preview, description }) => {
    return `<a class="gallery__item" href='${original}'> 
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`;
  })
  .join('');

gallery.insertAdjacentHTML('beforeend', elements);

new SimpleLightbox('.gallery a');

console.log(galleryItems);
