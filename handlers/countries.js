var countries = require("../data/countries.json");
var states = require("../data/states.json");
var cities = require("../data/cities-min.json");

function getList() {
  return countries;
}

function search(search) {
  return countries.filter(({ name }) =>
    name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );
}

function getById(id) {
  return countries.find((x) => x.id == id);
}

function getByIdWithStates(id) {
  const country = countries.find((x) => x.id == id);
  if (!country) return;
  return states.filter(({ country_id }) => country_id == id);
}

function getByIdWithCities(id) {
  const country = countries.find((x) => x.id == id);
  if (!country) return;
  return cities.filter(({ country_id }) => country_id == id);
}

module.exports = {
  getByIdWithStates,
  getByIdWithCities,
  getList,
  getById,
  search,
};
