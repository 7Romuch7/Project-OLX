import regModal from '../templates/reg-modal.hbs'

const regModalRef = document.querySelector('.registration-modal')
const openModalBtn = document.querySelector('.open-modal')
const closeModalBtn = document.querySelector('.close-button')

openModalBtn.addEventListener('click', openModal)
// closeModalBtn.addEventListener('click', closeModal)

function openModal() {
    regModalRef.classList.remove('is-hidden')
    modalRender()
}
// function closeModal() {
//    regModalRef.classList.add('is-hidden') 
// }

function modalRender() {
    regModalRef.insertAdjacentHTML('afterbegin', regModal())
}
console.log(closeModalBtn)