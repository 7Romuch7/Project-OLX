// import searchResultTmpl from '../../templates/searchResult.hbs';
import searchResultTmpl from '../../templates/searchResult.hbs';


const BASE_URL = 'https://callboard-backend.herokuapp.com';
const searchContainer = document.querySelector('#js-search-result');
const backdrop = document.querySelector('.search-modal-backdrop');


function fetchSearch(searchQuery) {
    return fetch(`${BASE_URL}/call/find?search=${searchQuery}`)
    .then(response => response.json())
    .then((result) => updateSearchMarckup(result))
    .catch(error => console.log('error', error));
}

function updateSearchMarckup(result) {
    // console.log(result);
    const markup = searchResultTmpl(result);
            // console.log(markup);
    searchContainer.insertAdjacentHTML('beforeend', markup);
     if (markup === ``) { 
    return alert ('Такого товара нет в наличии')
    };
    backdrop.classList.add('is-hidden');
}

export default fetchSearch;

// function fetchSearch(searchQuery) {
//     return fetch(`${BASE_URL}/call/find?search=${searchQuery}`)
//     .then(response => response.json())
//         .then((result) => updateSearchMarckup(result))
//     .catch(error => console.log('error', error));
// }