var cities = require("../data/cities-min.json"); //(with path)

function getList() {
  return cities;
}

function getById(id) {
  return cities.find((x) => x.id == id);
}

function search(data) {
  let { search, state, country } = data;

  if (typeof data !== "object") {
    search = data;
  }

  return cities.filter(({ name, state_id, country_id }) => {
    return (
      name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) &&
      (state ? state_id == state : true) &&
      (country ? country_id == country : true)
    );
  });
}

module.exports = {
  getList,
  getById,
  search,
};
