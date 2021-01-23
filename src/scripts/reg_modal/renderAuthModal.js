import AuthModalTmpl from '../../templates/authorization.hbs';
import FetchRegistration from './fetchRegForm';
import FetchLogIn from './fetchLogInForm';
import valid from './email-validation'
import './email-validation.js'
import getRefs from './refsAuth';
// const refs = getRefs();
const refs = {
    
        openModalBtn: document.querySelector('.login__btn_header'),
        bodyRef: document.querySelector('.body'),
        authModalEl: document.querySelector('.auth-modal'),
        authFormContainer: document.querySelector('.auth-backdrop'),
        registerBtn: document.querySelector('.js-register'),
        regBtn: document.querySelector('.js-register'),
        bodyEl: document.querySelector('.body'),
        emailInput: document.querySelector('.auth-form-input')
        
}

refs.openModalBtn.addEventListener("click", renderAuthModal);

function renderAuthModal() {
    const markup = AuthModalTmpl()
    makeMarkup(markup);
 
    document.querySelector('.auth-modal-close-button').addEventListener("click", closeAuthModal);

    
}

function makeMarkup() {
        refs.bodyEl.insertAdjacentHTML('beforeend', AuthModalTmpl());
    refs.bodyEl.addEventListener('click', sendFormData);
    // refs.emailInput.addEventListener('input', validate)
        function sendFormData(event) {
            if(event.target.classList.contains("js-register")) {
                event.preventDefault();
                let email = document.querySelector('.js-reg-email').value;
                let password = document.querySelector('.js-reg-password').value;

                const fetchRegistration = new FetchRegistration({ email, password });
                    fetchRegistration.addNewUser();
            } else if(event.target.classList.contains("js-login")) {
                event.preventDefault();
                let email = document.querySelector('.js-reg-email').value;
                let password = document.querySelector('.js-reg-password').value;

                const fetchLogIn = new FetchLogIn({ email, password });
                fetchLogIn.getCurrentUserData();
            }
    }
}
 
window.addEventListener('keyup', onKeyPress)
function closeAuthModal(event) {
    event.preventDefault();
    refs.bodyRef.querySelector('.auth-backdrop').remove();
}
function onKeyPress(event) {
    if (event.code === 'Escape') {
        closeAuthModal(event);
    }
  }

// function validate(evt) {
//     evt.preventDefault()
//    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//    if(reg.test(emailInput) == false) {
//       alert('Введите корректный e-mail');
//       return false;
//    }
// }