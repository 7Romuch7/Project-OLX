import searchResultTmpl from '../../templates/searchResult.hbs';


const BASE_URL = 'https://callboard-backend.herokuapp.com';
const searchContainer = document.querySelector('#js-search-result');
const backdrop = document.querySelector('.search-modal-backdrop');
const allertWrong = document.querySelector('.search_form_wrong_alert');


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
         allertWrong.classList.remove('is-hidden');
         return;
    };

    allertWrong.classList.add('is-hidden');
    backdrop.classList.add('is-hidden');
}

export default fetchSearch;

