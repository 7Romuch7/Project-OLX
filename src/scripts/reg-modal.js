import regModal from '../templates/reg-modal.hbs'



const regModalRef = document.querySelector('.lightbox__content')
const openModalBtn = document.querySelector('.login__btn')
const modalEl = document.querySelector('.js-lightbox')
const closeModalBtn = document.querySelector('.close-reg-button')


openModalBtn.addEventListener('click', openModal)


function openModal(evt) {
    evt.preventDefault()
    modalEl.classList.add('is-open')
    modalRender()
}

closeModalBtn.addEventListener('click', () => {
    modalEl.classList.remove('is-open')
     regModalRef.innerHTML = ''
    
})

function modalRender() {
    // regModalRef.insertAdjacentHTML('beforeend', regModal())
    regModalRef.innerHTML = regModal()
}
