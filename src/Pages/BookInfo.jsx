import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft  } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const BookInfo = ({ books }) => {
  return (
    <div id="books-body ">
      <div className="books-container">
        <div className="row">
          <div className="books-selected-top">
          <Link className = "book-link" to="/books">
          <FontAwesomeIcon icon={faArrowLeft} />
            </Link> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
