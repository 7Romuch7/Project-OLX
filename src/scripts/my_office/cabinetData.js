import myCabinetData from '../../templates/my_cabinet-page.hbs';

const btnCabinet = document.querySelector('.dropbtn_office');
const cabinet = document.querySelector('.cabinetData');
btnCabinet.addEventListener('click', onRenderDataCabinet);
function onRenderDataCabinet() {
    cabinet.insertAdjacentHTML('afterbegin', myCabinetData());
}
