import productModal from '../templates/productModal.hbs';

const modalProductContainer = document.querySelector("header");

function modalAppend() {
    modalProductContainer.insertAdjacentHTML('afterbegin', productModal())
     
}
modalAppend()

const openModalProduct = document.getElementById("myBtn");
const closeModal = document.querySelector('#close_modal_product');
const backdropMod = document.querySelector('.backdropProduct');

closeModal.addEventListener('click', closeModalProduct);
openModalProduct.addEventListener('click', openModalFunc);
backdropMod.addEventListener('click', closeModalOnBackdropProduct) ;


function openModalFunc(evt) {
    evt.preventDefault();
    backdropMod.classList.remove('is-hidden')
    window.addEventListener('keydown', onEscKeydown);

}

function closeModalProduct() {
    backdropMod.classList.add('is-hidden')
    
}

function closeModalOnBackdropProduct(event) {

    if (event.target === backdropMod) {
        backdropMod.classList.add('is-hidden');
        
    }
}

function onEscKeydown(event) {
    if (event.code === 'Escape') {
       closeModalProduct()
    }
}