import regModal from '../templates/reg-modal.hbs'



const regModalRef = document.querySelector('.lightbox__content')
const openModalBtn = document.querySelector('.login__btn')
const openUserProfile = document.querySelector('.user__profile-header')
const modalEl = document.querySelector('.js-lightbox')
const closeModalBtn = document.querySelector('.close-reg-button')


openModalBtn.addEventListener('click', openModal)
openUserProfile.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)

function openModal(evt) {
    
    evt.preventDefault()
    modalEl.classList.add('is-open')
    modalRender()
}

function closeModal() {
    
    modalEl.classList.remove('is-open')
     regModalRef.innerHTML = ''
}


function modalRender() {
    regModalRef.innerHTML = regModal()
}
