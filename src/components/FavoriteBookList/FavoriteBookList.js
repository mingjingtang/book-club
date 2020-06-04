import React, { Component } from "react";
import FavoriteBookRow from "../FavoriteBookRow/FavoriteBookRow";
import { Container, Grid, Message } from "semantic-ui-react";
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

    return (
      <Container>
        <Grid columns={2}>
          <Grid.Column>{favoriteBooks}</Grid.Column>
          <Grid.Column style={{ marginTop: "3vh" }}>
            {this.props.deleteSuccess === false ? (
              <div></div>
            ) : (
              <Message
                success
                header="Delete Successful!"
                content="You have sucessful delete the book from your favoriate list!"
              />
            )}
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default FavoriteBookList;
