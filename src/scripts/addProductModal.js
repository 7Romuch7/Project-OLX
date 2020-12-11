import productModal from '../templates/productModal.hbs'

const modalProductContainer = document.querySelector('.footer');
const openModalProduct = document.querySelector('[data-modal_product]');
const closeModal = document.querySelector('[close_modal_product]');

modalProductContainer.addEventListener('click', openModalFunc);
/* closeModal.addEventListener('click', closeModalProduct); */


function openModalFunc() {
    /* evt.preventDefault(); */
    /* openModalProduct.classList.remove('is-hidden') */
    modalAppend()
}

function closeModalProduct() {
   /* openModalProduct.classList.add('is-hidden')  */
   modalProductContainer.insertAdjacentHTML("")
}


function modalAppend() {
    modalProductContainer.insertAdjacentHTML('afterbegin', productModal())
    /* modalProductContainer.classList.add('is-hidden') */ 
}
/* modalAppend() */