const BASE_URL = 'https://callboard-backend.herokuapp.com';

export default class CategoriesApi {
  constructor(query) {
    this.query = query;
  }
  
  onHome() {
    return fetch(`${BASE_URL}/call?page=1`)
      .then(response => response.json())
      .then(result => result)
      .catch(error => console.log('error', error));
  }

  onSales() {
    return fetch(`${BASE_URL}/call/specific/sales`)
      .then(response => response.json())
      .then(result => result)
      .catch(error => console.log('error', error));
  }

  onRecreationAndSport() {
    return fetch(`${BASE_URL}/call/specific/recreationAndSport`)
      .then(response => response.json())
      .then(result => result)
      .catch(error => console.log('error', error));
  }

  onFree() {
    return fetch(`${BASE_URL}/call/specific/free`)
      .then(response => response.json())
      .then(result => result)
      .catch(error => console.log('error', error));
  }

  onBusinessAndServices() {
    return fetch(`${BASE_URL}/call/specific/businessAndServices`)
      .then(response => response.json())
      .then(result => result)
      .catch(error => console.log('error', error));
  }

  onWork() {
    return fetch(`${BASE_URL}/call/specific/${this.query}`)
      .then(response => response.json())
      .then(result => result)
      .catch(error => console.log('error', error));
  
  }

  onTransport() {
    return fetch(`${BASE_URL}/call/specific/transport`)
      .then(response => response.json())
      .then(result => result)
      .catch(error => console.log('error', error));
  }

  onElectronics() {
    return fetch(`${BASE_URL}/call/specific/electronics`)
      .then(response => response.json())
      .then(result => result)
      .catch(error => console.log('error', error));
  }

  onTrade() {
    return fetch(`${BASE_URL}/call/specific/trade`)
      .then(response => response.json())
      .then(result => result)
      .catch(error => console.log('error', error));
  }

  onProperty() {
    return fetch(`${BASE_URL}/call/specific/property`)
      .then(response => response.json())
      .then(result => result)
      .catch(error => console.log('error', error));
  }

  onError() {
    error({
      title: 'Невірна адреса сторінки!',
      delay: 1500,
    });
  }
}