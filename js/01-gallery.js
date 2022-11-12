import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const modal = basicLightbox.create(
  `<img class="modal-img" src="" width="800" height="600">`
);

const getItemTemplate = ({ preview, description, original }) =>
  `<div class="gallery__item" >
        <a href="" class="gallery__link">
            <img class="gallery__image" src ="${preview}" alt ="${description}" data-source="${original}">
        </a>
   </div>`;

const galleryRef = document.querySelector('.gallery');
const modalImageRef = modal.element().querySelector('.modal-img');
const bodyRef = document.querySelector('body');

const renderGallery = () => {
  const lis = galleryItems.map((item) => getItemTemplate(item));
  galleryRef.insertAdjacentHTML('beforeend', lis.join(''));
};

renderGallery();

const onClickShowModal = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  modalImageRef.src = event.target.dataset.source;

  modal.show(() => bodyRef.addEventListener('keydown', onEscPressCloseModal));
}

const onEscPressCloseModal = (event) => {
  if (event.keyCode == 27) {
    modal.close(() => bodyRef.removeEventListener('keydown', onEscPressCloseModal));
  }
}

const onClickCloseModal = (event) => {
  event.preventDefault();
  modal.close(() => bodyRef.removeEventListener('keydown', onEscPressCloseModal));
}

galleryRef.addEventListener('click', onClickShowModal);
modal.element().addEventListener('click', onClickCloseModal);


