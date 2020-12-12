
const backdrop = document.querySelector('.search-modal-backdrop');
const openSearchModalBtn = document.querySelector('.search-btn');
const closeSearchModalBtn = document.querySelector('.close-search-modal-button');

openSearchModalBtn.addEventListener("click", openSearchModal);
// closeSearchModalBtn.addEventListener("click", closeSearchModal);
console.log('work search modal.js');

function openSearchModal(evt) {
    evt.preventDefault()
    backdrop.classList.remove('is-hidden')
    console.log('work searchbutton')
}
// function closeSearchModal() {
    


