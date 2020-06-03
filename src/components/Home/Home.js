import React from "react";
import BookRow from "../BookRow/BookRow";
import {
  Form,
  Button,
  Container,
  Input,
  Grid,
  Message,
} from "semantic-ui-react";
import FavoriteBookList from "../FavoriteBookList/FavoriteBookList";

export default class MenuNav extends React.Component {
  render() {
    const {
      books,
      handleOnClick,
      fetchData,
      bookInfo,
      handleOnChange,
      dataPresent,
      wrongSubmit,
      addSuccess,
    } = this.props;

    const bookData =
      dataPresent !== false ? (
        books.map((book, index) => {
          return (
            <BookRow
              id={index}
              key={index}
              handleOnClick={handleOnClick}
              bookCover={book.cover}
              bookTitle={book.title}
              bookAuthor={book.author}
              bookYear={book.year}
              bookRating={book.rating}
            />
          );
        })
      ) : (
        <div className="ui error message">
          <div className="content">
            <div className="header">Sorry, couldn't find "{wrongSubmit}"!</div>
            <p>Please try to find other books or authors.</p>
          </div>
        </div>
      );

    const info = () => {
      if (addSuccess === true) {
        return (
          <Message
            success
            header="Add Sucessful!"
            content="You can check your favorite book from My Favoriate."
          />
        );
      }
      if (addSuccess === false) {
        return (
          <Message
            error
            header="Sorry, you can not add to your favoriate list!"
            content="You may already added it to your favoriate list."
          />
        );
      } else {
        return <div></div>;
      }
    };

    return (
      <Container>
        <Form onSubmit={fetchData}>
          <Form.Field inline>
            <Input
              style={{ width: "80%" }}
              placeholder="enter title or author of the book that you are interesting"
              name="bookInfo"
              value={bookInfo || ""}
              onChange={handleOnChange}
            />
            <Button primary>Search</Button>
          </Form.Field>
        </Form>

        <Container>
          <Grid columns={2}>
            <Grid.Column>{bookData}</Grid.Column>
            <Grid.Column style={{ marginTop: "3vh" }}>{info}</Grid.Column>
          </Grid>
        </Container>
      </Container>
    );
  }
}
