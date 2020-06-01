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
    } = this.props;

    const newFavoriateBook = {
      cover: `${bookCover}`,
      title: `${bookTitle}`,
      author: `${bookAuthor}`,
      year: `${bookYear}`,
      rating: `${bookRating}`,
      isFavoriateBook: true,
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
