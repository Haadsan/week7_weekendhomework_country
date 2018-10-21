

const CountryDetailView = function() {

}

CountryDetailView.prototype.createCountryDetail = function (country) {
  const countryDetail = document.createElement('div');
  countryDetail.classList.add('country-detail');

  const name = document.createElement('h3');
  name.textContent = country.name;
  countryDetail.appendChild(name);

  const detailsList = document.createElement('ul');
  const region = this.createDetailListItem('Region', country.region);
  detailsList.appendChild(region);

  const subregion = this.createDetailListItem('Subregion', country.subregion);
  detailsList.appendChild(subregion);

  const capital = this.createDetailListItem('Capital', country.capital);
  detailsList.appendChild(capital);

  const population = this.createDetailListItem('Population', country.population);
  detailsList.appendChild(population);

  const borders= this.createDetailListItem('borders', country.borders);
  detailsList.appendChild(borders);

  const currencies= this.createDetailListItem('Currency', country.currencies[0].name);
  detailsList.appendChild(currencies);

  countryDetail.appendChild(detailsList);
  return countryDetail;
};

CountryDetailView.prototype.createDetailListItem = function (label, property) {
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;

};

module.exports = CountryDetailView;
