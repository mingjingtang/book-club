import React from "react";
import BookList from "../BookList/BookList";
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
        <BookList books={books} handleOnClick={handleOnClick} />
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
