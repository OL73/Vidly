import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

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
      className="d-flex justify-content-center"
      aria-label="Page navigation example"
    >
      <ul className="pagination ">
        {tabPages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
            onClick={() => onHandlePage(page)}
          >
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
