import cabinetPage from '../../templates/my_office.hbs';

const BASE_URL = 'https://callboard-backend.herokuapp.com';


export default function cabinetFetch() {
     
    var myHeaders = new Headers();
    let localToken = localStorage.getItem('token');
    myHeaders.append('Authorization', localToken);
    let options = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };
    return fetch(`${BASE_URL}/user`, options)
        .then(response => response.json())
        .then(result => {
            console.log('office', result);
            if (localStorage['token']) {
                document.querySelector('.header').innerHTML = cabinetPage(result.favorites);
            }
        })
}