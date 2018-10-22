const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Countries = function(){
  this.countryData
  this.regions= [];
};


Countries.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (event)  => {
    const regionIndex = event.detail;
    this.publishCountriesByRegion(regionIndex);
  })
};


Countries.prototype.getData = function () {

  const url = ('https://restcountries.eu/rest/v2/all');
  const request = new Request(url);
  request.get().then(data =>{
    this.data = data
    // console.log(this.data);
    this.publishRegions(data);
    PubSub.publish('Country:country-data-loaded', this.data);
  });
  // PubSub.subscribe('SelectView:change', )
  // find example all the countries with the region that i am getting from this channel
  // publish the countries as a callback.
  // views subscribe to the channel and will display the countries of the page

};


Countries.prototype.publishRegions = function (data) {
  this.countryData = data;
  this.regions = this.uniqueRegionList();
  debugger;
  PubSub.publish('Countries:regions-ready', this.regions);
}

Countries.prototype.regionList = function () {
  debugger;
  const fullList = this.countryData.map(country => country.region);
  return fullList;
}


Countries.prototype.uniqueRegionList = function () {
  debugger;
  return this.regionList().filter((region, index, array) => {
    return array.indexOf(region) === index;
  });
}


Countries.prototype.countriesByRegion = function (regionIndex) {
  const selectedRegion = this.regions[regionIndex];
  return this.countriesData.filter((munro) => {
    return country.region === selectedRegion;
  });
};


Countries.prototype.publishCountriesByRegion = function (regionIndex) {
  const foundCountries = this.countriesByRegion(regionIndex);
  PubSub.publish('Countries:munros-ready', foundCountries);
};


module.exports = Countries;
