import React from "react";
import BookRow from "../BookRow/BookRow";
import { Form, Button, Container, Input } from "semantic-ui-react";

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
    } = this.props;

    const bookData =
      dataPresent !== false ? (
        books.map((book, index) => {
          return (
            <BookRow
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

        {bookData}
      </Container>
    );
  }
}
