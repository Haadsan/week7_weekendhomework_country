const PubSub = require('../helpers/pub_sub.js');
const CountryView = require('./country_view.js');

const CountryListView = function (container){
  this.container = container;
  this.countries = [];
}


CountryListView.prototype.bindEvents = function () {
   PubSub.subscribe('Country:country-data-loaded', (event) => {

    this.countries = event.detail;
    // here it displays array of objects of countries
    // console.log(this.countries);
    this.render();
   })

};

CountryListView.prototype.render = function () {
this.countries.forEach((country) => {

  // This console log brings up the countries
  // console.log(country);
  const countryView = new CountryView(this.container, country);
  countryView.render();

})
};

module.exports = CountryListView
