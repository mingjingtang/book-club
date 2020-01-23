import React, { Component } from "react";
import BookRow from "../BookRow/BookRow";

class BookList extends Component {
  render() {
    let renderBooks = this.props.books
      ? this.props.books.map((book, index) => {
          return (
            <div className="ui grid">
              <div className="one wide column">
                <BookRow
                  handleOnClick={this.props.handleOnClick}
                  key={index}
                  bookCover={book.cover}
                  bookTitle={book.title}
                  bookAuthor={book.author}
                  bookYear={book.year}
                  bookRating={book.rating}
                />
              </div>
            </div>
          );
        })
      : null;

    return <div className="bookList">{renderBooks}</div>;
  }
}
export default BookList;
