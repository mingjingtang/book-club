import React, { Component } from "react";
import FavoriteBookRow from "../FavoriteBookRow/FavoriteBookRow";
import { Container } from "semantic-ui-react";
import "../FavoriteBookList/FavoriteBookList.css";

class FavoriteBookList extends Component {
  render() {
    const favoriteBooks = this.props.favoriteBooks.map((book, index) => {
      return (
        <FavoriteBookRow
          handleOnClick2={this.props.handleOnClick2}
          key={index}
          bookId={book.bookId}
          bookCover={book.cover}
          bookTitle={book.title}
          bookAuthor={book.author}
          bookYear={book.year}
          bookRating={book.rating}
        />
      );
    });

    return <Container>{favoriteBooks}</Container>;
  }
}

export default FavoriteBookList;
