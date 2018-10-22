const CountryListView = require('./views/country_list_view.js')
const CountryView = require('./views/country_view.js')
const Countries = require('./models/countries.js');


document.addEventListener('DOMContentLoaded', () => {
const selectElement = document.querySelector('#region-select');
  const countryView = new CountryView(selectElement);
  countryView.bindEvents();

 const listContainer = document.querySelector('#country_list');
 const countryListView = new CountryListView(listContainer);
 countryListView.bindEvents();


const countries = new Countries();
// countries.bindEvents();
countries.getData();
})
