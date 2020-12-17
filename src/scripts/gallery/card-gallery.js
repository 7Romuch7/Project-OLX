import templatesCadrGallery from '../../templates/cardGallery.hbs';
import templatesCategory from '../../templates/category.hbs';
import { addSlider } from './slider.js';
import { BASE_URL } from '../../scripts/constans/index.js'
import { Object } from 'core-js';
const cardGallaryMarkup = document.querySelector('.gallery');
const cardCategoryMarkup = document.querySelector('.main');
const translationCategory = {
        sales: 'Розпродаж',
        property: 'Нерухомість',
        transport: 'Транспорт',
        work: 'Робота',
        electronics: 'Електроніка',
        businessAndServices: 'Бізнес та послуги',
        recreationAndSport: 'Відпочинок та спорт',
        free: 'Віддам безкоштовно',
        trade: 'Обмін',
}
function renderCard(categories) { 
  for (let card in categories) { 
    let gellary = document.querySelector('[data-category="'+card+'"]');
    gellary.insertAdjacentHTML('beforeend', templatesCadrGallery(categories[card]))    
  }
  
}
function fetchCategories() { 
  fetch(`${BASE_URL}/call/?page=1`)
    .then(r => r.json())
    .then(categories => {
      let items = Object.keys(categories).map( item => {
        return {
          category: item,
          title: translationCategory[item]
        }
        
      }) 
      let arrCategories = templatesCategory( items );
      cardCategoryMarkup.insertAdjacentHTML('beforeend', arrCategories);
      renderCard(categories);
      
    })
}
fetchCategories();
