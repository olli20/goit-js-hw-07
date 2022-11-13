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

const refs = {
  gallery: document.querySelector('.gallery'),
  modalImage: modal.element().querySelector('.modal-img'),
  body: document.querySelector('body'),
}

const renderGallery = () => {
  const lis = galleryItems.map((item) => getItemTemplate(item));
  refs.gallery.insertAdjacentHTML('beforeend', lis.join(''));
};

renderGallery();

const onClickShowModal = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  refs.modalImage.src = event.target.dataset.source;

  modal.show(() => refs.body.addEventListener('keydown', onEscPressCloseModal));
}

const onEscPressCloseModal = (event) => {
  if (event.keyCode == 27) {
    modal.close(() => refs.body.removeEventListener('keydown', onEscPressCloseModal));
  }
}

const onClickCloseModal = (event) => {
  event.preventDefault();
  modal.close(() => refs.body.removeEventListener('keydown', onEscPressCloseModal));
}

refs.gallery.addEventListener('click', onClickShowModal);
modal.element().addEventListener('click', onClickCloseModal);


