import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const instance = basicLightbox.create(`
    <img class="modal-img" src="" width="800" height="600">
`);

const getItemTemplate = ({ preview, description, original}) =>
  `<div class="gallery__item" >
        <a href="" class="gallery__link">
            <img class="gallery__image" src ="${preview}" alt ="${description}" data-source="${original}">
        </a>
    </div>`;

const galleryRef = document.querySelector('.gallery');
const modalImageRef = instance.element().querySelector('.modal-img');

const renderGallery = () => {
  const lis = galleryItems.map((item) => getItemTemplate(item));
  galleryRef.insertAdjacentHTML('beforeend', lis.join(''));
};

renderGallery();

const onClickShowImg = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  modalImageRef.src = event.target.dataset.source;
  
  instance.show();
}
  
galleryRef.addEventListener('click', onClickShowImg);
modalImageRef.addEventListener('click', instance.close);