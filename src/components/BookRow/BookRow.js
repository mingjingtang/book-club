import React, { Component } from "react";
import "../BookRow/BookRow.css";

class BookRow extends Component {
  render() {
    const {
      bookCover,
      bookTitle,
      bookAuthor,
      bookYear,
      bookRating,
      handleOnClick,
      id,
    } = this.props;

    const newFavoriateBook = {
      id: `${id}`,
      cover: `${bookCover}`,
      title: `${bookTitle}`,
      author: `${bookAuthor}`,
      year: `${bookYear}`,
      rating: `${bookRating}`,
    };

    return (
      <div className="bookRow">
        <div>
          <div>
            <img src={bookCover} alt="" />
          </div>
          <div>
            <p>Title: {bookTitle}</p>
            <p>Author: {bookAuthor}</p>
            <p>Year: {bookYear}</p>
            <p>Rating: {bookRating}</p>
          </div>
        </div>

        <button
          style={{ marginTop: "2vh" }}
          onClick={(e) => handleOnClick(newFavoriateBook)}
        >
          Add to my favoriate list
        </button>
      </div>
    );
  }
}
export default BookRow;
