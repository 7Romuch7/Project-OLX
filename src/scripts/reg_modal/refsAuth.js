export default function getRefs() {
    return {
        openModalBtn: document.querySelector('.login__btn_header'),
        authModalEl: document.querySelector('.auth-modal'),
        authFormContainer: document.querySelector('.auth-backdrop'),
        registerBtn: document.querySelector('.js-register'),
        regBtn: document.querySelector('.js-register'),
        bodyEl: document.querySelector('.body'),
        emailInput: document.querySelector('.auth-form-input')
    };
  }