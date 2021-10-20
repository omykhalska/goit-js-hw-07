import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = createGalleryMarkup(galleryItems);

galleryContainer.addEventListener('click', onGalleryClick);

function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
    })
    .join('');
}

function onGalleryClick(e) {
  e.preventDefault();

  if (e.target === e.currentTarget) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src=${e.target.dataset.source} width="1280">
`);

  instance.show();
}
