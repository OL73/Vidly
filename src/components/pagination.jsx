import React from "react";
import _ from "lodash";

const Pagination = ({
  moviesSize,
  itemsPerPage,
  onHandlePage,
  currentPage,
}) => {
  // Math.ceil permet d'obtenir l'arrondi et d'afficher ou non la pagination si nbPages > 1
  const nbPages = Math.ceil(moviesSize / itemsPerPage);

  if (nbPages === 1) return null;

  // utilisation de lodash pour obtenir un tableau qui va contenir le nombre de pages
  const tabPages = _.range(1, nbPages + 1);

  return (
    <nav
      className="d-flex justify-content-center mt-3"
      aria-label="Page navigation example"
    >
      <ul className="pagination ">
        {tabPages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
            onClick={() => onHandlePage(page)}
          >
            <p className="page-link">{page}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
