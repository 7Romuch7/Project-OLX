
const backdrop = document.querySelector('.search-modal-backdrop');
const openSearchModalBtn = document.querySelector('#search-btn');
const closeSearchModalBtn = document.querySelector('#close-search-modal-button');

openSearchModalBtn.addEventListener('click', openSearchModal);
closeSearchModalBtn.addEventListener("click", closeSearchModal);
// document.addEventListener('click', function(event) {
//   var e=document.querySelector('.search-modal-backdrop');
//   if (!e.contains(event.target)) closeSearchModal(evt);
// });

function openSearchModal(evt) {
    evt.preventDefault()
    backdrop.classList.remove('is-hidden')
}
   
function closeSearchModal(evt) { 
    evt.preventDefault()
    backdrop.classList.add('is-hidden')
}
    
// function ESCclose(evt) {
//      if (evt.keyCode == 27) {
//        closeSearchModal(evt)
//        console.log('close the window...')
//      }
// }

