import mainData from "../data.json";

function sortByName(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}

function sortByCategory(a, b) {
  var nameA = a.category.toUpperCase(); // ignore upper and lowercase
  var nameB = b.category.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}

//sorted by Name
export const dataByName = mainData.sort((a, b) => (sortByName(a, b) ? 1 : -1));

//sorted by Category
export const dataByCategory = mainData.sort((a, b) =>
  sortByCategory(a, b) ? 1 : -1
);

//sorted by Price
export const dataByPrice = mainData.sort((a, b) =>
  a.price > b.price ? 1 : -1
);

//sorted by Availablity
export const dataByAvailablity = mainData.sort((a, b) =>
  a.available > b.available ? 1 : -1
);
