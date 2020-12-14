import regModal from '../templates/reg-modal.hbs'
// import validator from 'validator';
// import isEmail from 'validator/lib/isEmail';


const regModalRef = document.querySelector('.lightbox__content')
modalRender()
const openModalBtn = document.querySelector('.login__btn')
const openUserProfile = document.querySelector('.user__profile-header')
const modalEl = document.querySelector('.js-lightbox')
const closeModalBtn = document.querySelector('.close-reg-button')
const entryBtnRef = document.querySelector('.entry-btn')
const emailInput = document.querySelector('.email-input')
const passwordInputRef = document.querySelector('.password-input')
const googleAuthRef = document.querySelector('.google-auth')

openModalBtn.addEventListener('click', openModal)
openUserProfile.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)
entryBtnRef.addEventListener('click', validate)
googleAuthRef.addEventListener('click', init)
function openModal(evt) {
    
    evt.preventDefault()
    modalEl.classList.add('is-open')
}

function closeModal() {
    
    modalEl.classList.remove('is-open')
     regModalRef.innerHTML = ''
}


function modalRender() {
    regModalRef.innerHTML = regModal()
}

// валидация имейла(просто но со вкусом))
function validate(evt) {
    evt.preventDefault()
   const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   if(reg.test(emailInput) == false) {
      alert('Введите корректный e-mail');
      return false;
   }
}

function init() {
  window.gapi.load('auth2', function() {
  /* Ready. Make a call to gapi.auth2.init or some other API */
window.gapi.auth2.init(     {
  client_id: 'AIzaSyBmUxqcrMpOj0QARBQczbbIvuBTN4dIDIQ'
})
//   AIzaSyBmUxqcrMpOj0QARBQczbbIvuBTN4dIDIQ
 
  });
}

    
    //   function onSignIn(googleUser) {
    //     // Useful data for your client-side scripts:
    //     var profile = googleUser.getBasicProfile();
    //     console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    //     console.log('Full Name: ' + profile.getName());
    //     console.log('Given Name: ' + profile.getGivenName());
    //     console.log('Family Name: ' + profile.getFamilyName());
    //     console.log("Image URL: " + profile.getImageUrl());
    //     console.log("Email: " + profile.getEmail());

    //     // The ID token you need to pass to your backend:
    //     var id_token = googleUser.getAuthResponse().id_token;
    //     console.log("ID Token: " + id_token);
    //   }
   


// проверка поля пароля на пустоту и количество исмволов

// function validatePassword(evt) {
//     const passChech = passwordInputRef.value
//     if(passChech.)
// }
// googleAuthRef.addEventListener("click", start)
//       function start() {
//         // Initializes the client with the API key and the Translate API.
//         gapi.client.init({
//           'apiKey': 'YOUR_API_KEY',
//           'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/translate/v2/rest'],
//         }).then(function() {
//           // Executes an API request, and returns a Promise.
//           // The method name `language.translations.list` comes from the API discovery.
//           return gapi.client.language.translations.list({
//             q: 'hello world',
//             source: 'en',
//             target: 'de',
//           });
//         }).then(function(response) {
//           console.log(response.result.data.translations[0].translatedText);
//         }, function(reason) {
//           console.log('Error: ' + reason.result.error.message);
//         });
//       };

      // Loads the JavaScript client library and invokes `start` afterwards.
    //   gapi.load('client', start);