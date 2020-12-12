
import productModal from '../templates/productModal.hbs';



const modalProductContainer = document.querySelector("header");
const openModalProduct = document.getElementById("myBtn");
const closeModal = document.querySelector('close_modal_product');




/* closeModal.addEventListener('click', closeModalProduct); */
openModalProduct.addEventListener('click', openModalFunc);


function openModalFunc(evt) {
    evt.preventDefault();
    /* modalProductContainer.classList.toggle('is-hidden') */
    modalAppend()
    window.addEventListener('keydown', onEscKeydown);

}

function closeModalProduct() {
    modalProductContainer.classList.add('is-hidden');
    modalProductContainer.insertAdjacentHTML = ''
    
}


function modalAppend() {
    modalProductContainer.insertAdjacentHTML('afterbegin', productModal())
     
}
/* modalAppend() */
function onEscKeydown(event) {
    if (event.code === 'Escape') {
       closeModalProduct()
    }
}