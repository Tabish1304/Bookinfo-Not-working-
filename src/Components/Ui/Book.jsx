import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";

const Book = ({ book, title }) => {

  return (
    <div className="books">
      <div className="book">
        <Link to="/books/1">
          <figure className="book-img-wrapper">
            <img src={book.url} alt="" />
          </figure>
        </Link>
        <div className="book-title">
          <Link className="book-title-link" to="/books/1">
            {book.title}
          </Link>
        </div>
        <div className="book-ratings">
        {
        new Array(Math.floor(book.rating)).fill(0).map((_,index)=> <FontAwesomeIcon icon={faStar} key={index} /> )
        }
        {
          !Number.isInteger(book.rating) && <FontAwesomeIcon icon={faStarHalfAlt}  />
        }

        
        </div>
        <div className="book-price">
          {book.salePrice ? (
            <>
              <span className="book-price-normal">£{book.originalPrice.toFixed(2)}</span>
              £{book.salePrice.toFixed(2)}
            </>
          ) : (
           <>£{book.originalPrice.toFixed(2)}</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
