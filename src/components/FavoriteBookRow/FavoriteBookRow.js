import React, { Component } from "react";
import "../FavoriteBookRow/FavoriteBookRow.css";

class FavoriteBookRow extends Component {
  render() {
    const {
      bookCover,
      bookTitle,
      bookAuthor,
      bookYear,
      bookRating,
      id,
    } = this.props;

    return (
      <div className="bookRow">
        <div>
          <img src={bookCover} alt="" />
          <p>Title: {bookTitle}</p>
          <p>Author: {bookAuthor}</p>
          <p>Year: {bookYear}</p>
          <p>Rating: {bookRating}</p>
        </div>

        <button
          style={{ marginTop: "2vh" }}
          onClick={(e) => this.props.handleOnClick2(id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default FavoriteBookRow;
