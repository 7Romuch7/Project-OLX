import './refsAuth.js'

export default function validate() {
  const emailInput = document.querySelector('.auth-form-input')
   const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   if(reg.test(emailInput) == false) {
      alert('Введите корректный e-mail');
      return false;
   }
}