const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Countries = function(){
  this.countryData
  this.regions= [];
};


// Countries.prototype.bindEvents = function () {
//   PubSub.subscribe('SelectView:change', (event)  => {
//     const regionIndex = event.detail;
//     this.publishCountriesByRegion(regionIndex);
//   })
// };


Countries.prototype.getData = function () {

  const url = ('https://restcountries.eu/rest/v2/all');
  const request = new Request(url);
  request.get().then(data =>{
    this.data = data
    console.log(this.data);
    PubSub.publish('Country:country-data-loaded', this.data);
  });

};

//
// Countries.prototype.publishRegions = function (data) {
//   this.countryData = data;
//   this.regions = this.uniqueRegionList();
//   PubSub.publish('Countries:regions-ready', this.regions);
// }
//
// Countries.prototype.regionList = function () {
//   const fullList = this.countriesData.map(country => country.region);
//   return fullList;
// }
//
//
// Countries.prototype.uniqueRegionList = function () {
//   return this.regionList().filter((country, index, array) => {
//     return array.indexOf(country) === index;
//   });
// }
//
//
// Countries.prototype.countriesByRegion = function (regionIndex) {
//   const selectedRegion = this.regions[regionIndex];
//   return this.countriesData.filter((munro) => {
//     return country.region === selectedRegion;
//   });
// };
//
//
// Countries.prototype.publishCountriesByRegion = function (regionIndex) {
//   const foundCountries = this.countriesByRegion(regionIndex);
//   PubSub.publish('Countries:munros-ready', foundCountries);
// };


module.exports = Countries;
