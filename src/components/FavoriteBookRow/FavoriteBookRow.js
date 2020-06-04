import React, { Component } from "react";
import "../FavoriteBookRow/FavoriteBookRow.css";
import { Button } from "semantic-ui-react";

class FavoriteBookRow extends Component {
  render() {
    const {
      bookCover,
      bookTitle,
      bookAuthor,
      bookYear,
      bookRating,
      bookId,
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

        <Button
          color="pink"
          style={{ marginTop: "2vh" }}
          onClick={(e) => this.props.handleOnClick2(bookId)}
        >
          Delete
        </Button>
      </div>
    );
  }
}

export default FavoriteBookRow;
