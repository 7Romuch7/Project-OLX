
import productModal from '../templates/productModal.hbs';

const modalProductContainer = document.querySelector("header");

function modalAppend() {
    modalProductContainer.insertAdjacentHTML('afterbegin', productModal())
     
}
modalAppend()

const openModalProduct = document.getElementById("myBtn");
const closeModal = document.querySelector('#close_modal_product');
const backdrop = document.querySelector('.backdropProduct');




closeModal.addEventListener('click', closeModalProduct);
openModalProduct.addEventListener('click', openModalFunc);


function openModalFunc(evt) {
    evt.preventDefault();
    backdrop.classList.remove('is-hidden')
    window.addEventListener('keydown', onEscKeydown);

}

function closeModalProduct() {
    backdrop.classList.add('is-hidden')
    
}



function onEscKeydown(event) {
    if (event.code === 'Escape') {
       closeModalProduct()
    }
}