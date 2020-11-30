import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  // récupération de l'index pour initialiser la découpe du tableau de movies
  const startIndex = (pageNumber - 1) * pageSize;

  // on retourne le tableau de movies (items) découpé à partir de startIndex et on prend le nombre movies souhaités (pageSize)
  return _(items).slice(startIndex).take(pageSize).value();
}
