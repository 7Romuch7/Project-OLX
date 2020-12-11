// Реализует открытие модалки по кнопке "створити оголошення"


const refs = {
   addModalBackdropEl: document.querySelector('.add-modal__backdrop'),
   openAddModalButtonEl: document.querySelector('.info__content .btn'),
   closeAddModalButtonEl: document.querySelector('.add-modal__close-button'),
}


console.log(refs.openAddModalButtonEl);


refs.openAddModalButtonEl.addEventListener('click', openAddModalHandler);
refs.closeAddModalButtonEl.addEventListener('click', closeAddModalHandler);

function openAddModalHandler(event){
    refs.addModalBackdropEl.classList.toggle('is-hidden');
}

function closeAddModalHandler(event){
    refs.addModalBackdropEl.classList.add('is-hidden');
}