export function getById(id, array) {
  if (array !== undefined) {
    return array.find((item) => {
      return item.id === id;
    });
  }
}

export function getSeries(array) {
  if (array !== undefined) {
    return array.filter((item) => {
      return item.category === "serie";
    });
  }
}

export function getDocumentaries(array) {
  if (array !== undefined) {
    return array.filter((item) => {
      return item.category === "documentary";
    });
  }
}

export function getFilms(array) {
  if (array !== undefined) {
    return array.filter((item) => {
      return item.category === "film";
    });
  }
}

export function getCategory(array, category) {
  if (array !== undefined) {
    return array.filter((item) => {
      return item.category === category;
    });
  } else {
    return [];
  }
}
