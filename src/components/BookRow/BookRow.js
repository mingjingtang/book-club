import React, { Component } from "react";
import "../BookRow/BookRow.css";

class BookRow extends Component {
  render() {
    const newFavoriateBook = {
      cover: `${this.props.bookCover}`,
      title: `${this.props.bookTitle}`,
      author: `${this.props.bookAuthor}`,
      year: `${this.props.bookYear}`,
      rating: `${this.props.bookRating}`,
      isFavoriateBook: true
    };

    return (
      <div className="ui grid" className="bookRow">
        <div className="ui small image">
          <img src={this.props.bookCover} alt="" />
        </div>
        <div className="ui header">
          <p>Title: {this.props.bookTitle}</p>
          <p>Author: {this.props.bookAuthor}</p>
          <p>Year: {this.props.bookYear}</p>
          <p>Rating: {this.props.bookRating}</p>
        </div>
        <div>
          <button
            className="button is-danger is-rounded"
            onClick={e => this.props.handleOnClick(newFavoriateBook)}
          >
            Add to my favoriate list
          </button>
        </div>
      </div>
    );
  }
}
export default BookRow;
