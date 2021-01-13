import CategoriesAPI from '../gallery/сategories.js';

const API = new CategoriesAPI();

const routers = [
    {
        path: '/',    
        component: API.onHome,
        meta: { auth: false}
    },
    /* {
        path: '/page2',    
        component: API.onHome,
        meta: { auth: false}
    },
    {
        path: '/page3',   
        // component: fun3,
        meta: { auth: false}
    }, */
    {
        path: '/recreationAndSport',
        component: API.onRecreationAndSport,
        meta: { auth: false}
    },
    {
        path: '/free',
        component: API.onFree,
        meta: { auth: false}
    },
    {
        path: '/businessAndServices',
        component: API.onBusinessAndServices,
        meta: { auth: false}
    },
    {
        path: '/electronics',
        coponent: API.onElectronics,
        meta: { auth: false}
    },
    {
        path: '/trade',
        component: API.onTrade,
        meta: { auth: false}
    },
    {
        path: '/transport',
        component: API.onTransport,
        meta: { auth: false}
    },
    {
        path: '/work',
        component: API.onWork,
        meta: { auth: false}
    },
    {
        path: '/property',
        component: API.onProperty,
        meta: { auth: false}
    },
    {
        path: '/sales',
        component: API.onSales,
        meta: { auth: false}
    },

];

let auth = true;
let startState = true;


let divPagination = document.querySelector('.nav-paggination');
const listPagination = document.querySelector('.form_radio_group')
const clearBtn = document.querySelector('.filter')
const clearOfficeBtn = document.querySelector('.filter_office')
const showCategories = document.querySelector('.category')
const links = document.querySelector('.menu__links');

function filterPage(event) {
    event.preventDefault();
    const tagName = event.target.tagName
    if (tagName !== "A") return
    updatedContent();
    showHistory(event);    
}

function showClearBtn(event) {
    event.preventDefault();
    if (event.target.tagName !== "A") return
    
    showCategories.classList.add('is_hiden')
    showHistory2(event);    
    
}

function showClearOfficeBtn(event) {
    event.preventDefault();
    if (event.target.tagName !== "BUTTON") return
    showCategories.classList.add('is_hiden')
    showHistory2(event);    
}

function showHistory2(event) {
    const query = '/';
    let router = routers.find( item => item.path === query);
    if (!router) return
    if (!router.meta.auth || !auth) history.pushState(query, null, query)
}

function showHistory(event) {
    const query = event.target.getAttribute('href');
    let router = routers.find( item => item.path === query);
    if (!router) return
    if (!router.meta.auth || !auth) history.pushState(query, null, query)
}

function updatedContent() {
  let router = routers.find(
    item => item.path === history.state || item.path === location.pathname,
  );
  if (!router) {
    API.onError();
    return;
  }
  if (!router.meta.auth || !auth) {
    router.component();
  } else if (router.meta.auth && auth && startState) {
    routers[0].component();
    history.pushState(routers[0].path, null, routers[0].path);
  }
  startState = false;
}

links.addEventListener('click', filterPage);
divPagination.addEventListener('click', filterPage);
listPagination.addEventListener('click', filterPage);
clearBtn.addEventListener('click', showClearBtn);
//clearOfficeBtn.addEventListener('click', showClearOfficeBtn);