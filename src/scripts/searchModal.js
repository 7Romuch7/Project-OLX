import searchModalTempl from '../templates/searchModalTempl.hbs';
console.log(searchModalTempl);
const searchSection = document.querySelector('.search');
const openSearchModalBtn = document.querySelector("[data-modal-open]");
// const closeSearchModalBtn = document.querySelector("[data-modal-close]");
const backdrop = document.querySelector("[data-backdrop]");
// openSearchModalBtn.addEventListener("click", toggleSearchModal);
// closeSearchModalBtn.addEventListener("click", closeSearchModal);
function buildSearchModalTempl() {
    searchSection.insertAdjacentHTML('afterbegin', searchModalTempl())
}
buildSearchModalTempl()
function toggleSearchModal() {
    backdrop.classList.toggle("is-hidden")
}