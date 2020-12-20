import fetchSearch from './fetch-search.js';


const searchContainer = document.querySelector('#js-search-result');
const searchForm = document.querySelector('.js-search-form');
const allertNull = document.querySelector('.search_form_null_alert');

searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const inputValue = form.elements.query.value;
  
  if (inputValue === ``) {
      allertNull.classList.remove('is-hidden');
      return;
  };
    // console.log(inputValue);
    allertNull.classList.add('is-hidden');
    searchContainer.innerHTML = '';
    form.reset();
    fetchSearch(inputValue);
    
}

