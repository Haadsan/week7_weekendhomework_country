const PubSub = require('../helpers/pub_sub.js');
const CountryDetailView = require('./country_detail_view.js');

const CountryListView = function (container){
  this.container = container;

}


CountryListView.prototype.bindEvents = function () {
   PubSub.subscribe('Country:country-data-loaded', (event) => {
     // this.clearList();
    // here it displays array of objects of countries
    // console.log(this.renderCountryDetailView);
    this.renderCountryDetailView(event.detail);
  });

};

// CountryListView.prototype.clearList = function () {
//   this.container.innerHTML = '';
//
// };

CountryListView.prototype.renderCountryDetailView = function (countries) {
countries.forEach((country) => {
  const countryItem = this.createCountryListItem(country);
  this.container.appendChild(countryItem);
  // This console log brings up the countries
  // console.log(countryItem);
});
};

CountryListView.prototype.createCountryListItem = function (country) {
  const countryDetailView = new CountryDetailView();
  const countryDetail = countryDetailView.createCountryDetail(country)
  return countryDetail;
};

module.exports = CountryListView;
