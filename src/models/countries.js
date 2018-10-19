const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Countries = function(){
  this.countries = [];
};


Countries.prototype.getData = function () {

  const url = ('https://restcountries.eu/rest/v2/all');
  const request = new Request(url);
  request.get().then(data =>{
    this.data = data
    // console.log(this.data);
    PubSub.publish('Country:country-data-loaded', this.data);
  });

};

module.exports = Countries;
