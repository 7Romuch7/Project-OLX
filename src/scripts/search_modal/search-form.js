import fetchSearch from './fetch-search.js';
// import updateSearchMarckup from './update-search-marcup.js';

const searchContainer = document.querySelector('#js-search-result');
const searchForm = document.querySelector('.js-search-form');

searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();
    const form = event.currentTarget;
    const inputValue = form.elements.query.value;
  
    if (inputValue === ``) {
        return alert('Введите название товара');
    };
    
  
    // console.log(inputValue);
    
    searchContainer.innerHTML = '';
    form.reset();
    fetchSearch(inputValue);
  
   
}

// searchForm.addEventListener('submit', event => {
//     event.preventDefault();

//     const form = event.currentTarget;
//     const inputValue = form.elements.query.value;
//       console.log(inputValue);

//     searchContainer.innerHTML = '';
//     form.reset();
//     fetchSearch(inputValue).then(updateSearchMarckup(searchresult));
  //  .then(data => console.log(data))
// });
//  fetchSearch(inputValue).then(updateSearchMarckup(searchResult));
// 51 min https://www.youtube.com/watch?v=P21I8JtLGOs&feature=youtu.be&ab_channel=GoITFrontend