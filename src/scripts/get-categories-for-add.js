"use strict"




let translationOfWords = {
    property:'Недвижимость',
    transport:'Транспорт',
    work:'Работа',
    electronics:'Электроника',
    'business and services':'Бизнес и услуги',
    'recreation and sport':'Отдых и спорт',
    free:'Бесплатно',
    trade:'Торговля'
};



const selectContainerEl = document.querySelector('#product-category');

      

 let getCategoriesArray =  async() => {
    return await fetch('https://callboard-backend.herokuapp.com/call/categories')
    .then(res => res.json())
    .then(data => {
       let links= data;

       links = renderLinksToSelect(links);
    
    }) 
    
 }

 getCategoriesArray();
  
 function renderLinksToSelect(links){
    links = links.map(link=>`<option>${translationOfWords[link]}</option>`);
    selectContainerEl.innerHTML = links.join(' ');
 }
 

