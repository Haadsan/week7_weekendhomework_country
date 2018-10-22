const PubSub = require('../helpers/pub_sub.js');
const CountryDetailView = require('./country_detail_view.js');

const CountryListView = function (container){
  this.container = container;

}


CountryListView.prototype.bindEvents = function () {
   PubSub.subscribe('Country:country-data-loaded', (event) => {
     // this.clearList();
    // here it displays array of objects of countries
    this.renderCountryDetailView(event.detail);
  });

};

CountryListView.prototype.clearList = function () {
  this.container.innerHTML = '';

};

CountryListView.prototype.renderCountryDetailView = function (countries) {
countries.forEach((country) => {
  const countryItem = this.createCountryListItem(country);
  this.container.appendChild(countryItem);
  // This console log brings up the countries on a div with it's ul list
  console.log(countryItem);
});
};

CountryListView.prototype.createCountryListItem = function (country) {
  const countryDetailView = new CountryDetailView();
  const countryDetail = countryDetailView.createCountryDetail(country)
// console.log(countryDetail);
// has the div with it's ul of what i have on country_detail_view.js
  return countryDetail;
};

module.exports = CountryListView;
