const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal_menu');
const openModalButton = document.querySelector('.menu-button');
const closeModalButton = document.querySelector('.close-button');

openModalButton.addEventListener('click', onModalMenu);
closeModalButton.addEventListener('click', closeModalMenu);

function onModalMenu(event) {
    window.addEventListener('keydown', onEscKeydown);
    event.preventDefault();
    
        backdrop.style.display = "block"; 
}

function closeModalMenu() {
    backdrop.style.display = "none";
}
  
function onEscKeydown(event) {
    if (event.code === 'Escape') {
       closeModalMenu()
    }
}