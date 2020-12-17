const backdrop = document.querySelector('.search-modal-backdrop');
const openSearchModalBtn = document.querySelector('#search-btn');
const closeSearchModalBtn = document.querySelector('#close-search-modal-button');

openSearchModalBtn.addEventListener('click', openSearchModal);
closeSearchModalBtn.addEventListener("click", closeSearchModal);

function openSearchModal(evt) {
    evt.preventDefault()
    backdrop.classList.remove('is-hidden')
}
   
function closeSearchModal(evt) { 
    evt.preventDefault()
    backdrop.classList.add('is-hidden')
}
    


