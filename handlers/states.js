var states = require("../data/states.json"); //(with path)
var cities = require("../data/cities-min.json"); //(with path)

function getList() {
  return states;
}

function getById(id) {
  return states.find((x) => x.id == id);
}

function getByIdWithCities(id) {
  const state = states.find((x) => x.id == id);
  if (!state) return;
  return cities.filter(({ state_id }) => state_id == id);
}

function search(data) {
  let { search, country } = data;

  if (typeof data !== "object") {
    search = data;
  }

  return states.filter(({ name, country_id }) => {
    return (
      name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) &&
      (country ? country_id == country : true)
    );
  });
}

module.exports = {
  getByIdWithCities,
  getList,
  getById,
  search,
};
