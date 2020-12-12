import category from '../templates/navigation_categores.hbs';

let raw = "";

const requestOptions = {
  method: 'GET',
  body: raw,
  redirect: 'follow'
};

fetch("https://callboard-backend.herokuapp.com/call/specific/property", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
