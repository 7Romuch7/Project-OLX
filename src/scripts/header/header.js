import header from '../../templates/my_office.hbs';



const headerList = document.querySelector('.header');

function buildHeaderTpl() {
    headerList.insertAdjacentHTML('afterbegin', header())
}

buildHeaderTpl();