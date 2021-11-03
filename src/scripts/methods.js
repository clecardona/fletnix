export function getById(id, array) {
  if (array !== undefined) {
    return array.find((item) => {
      return item.id === id;
    });
  }
}

export function getCategory(array, category) {
  if (array !== undefined) {
    if (category === "all") {
      return array;
    }
    return array.filter((item) => {
      return item.category === category;
    });
  } else {
    return [];
  }
}
