// const PubSub = require('../helpers/pub_sub');
//
//
// const CountryView = function (selectElement){
//   this.selectElement= selectElement;
//
// };
//
// CountryView.prototype.bindEvents = function () {
//   PubSub.subscribe('Countries:regions-ready', (event) => {
//     this.populateSelect(event.detail);
//   });
//   this.selectElement.addEventListener('change', (event) => {
//     const selectedIndex = event.target.value;
//     // console.log(selectedIndex);
//     PubSub.publish('SelectView:change', selectedIndex);
//
//
//   });
// };
//
// CountryView.prototype.populateSelect = function (regions) {
//   regions.forEach((region, index) => {
//     const option = this.createRegionOption(region, index);
//     this.selectElement.appendChild(option);
//   })
// };
//
//
// CountryView.prototype.createRegionOption = function (region, index) {
//   const option = document.createElement('option');
//   option.textContent = region;
//   option.value = index;
//   return option;
// };
//
//
//
// module.exports = CountryView;
