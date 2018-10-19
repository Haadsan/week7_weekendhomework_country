const CountryListView = require('./views/countries_list_view.js')
const Countries = require('./models/countries.js');


document.addEventListener('DOMContentLoaded', () => {
// console.log('JavaScript Loaded');
const countriesListContainer = document.querySelector("#countries")
// console.log(countriesListContainer);
const countriesListView = new CountryListView(countriesListContainer);
countriesListView.bindEvents();
 // console.log(countriesListView);




const countries = new Countries();
countries.getData();
})
