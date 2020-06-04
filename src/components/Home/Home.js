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
          if (typeof book.average_rating[0] === "string") {
            return (
              <BookRow
                key={index}
                bookId={{ ...book }.best_book[0].id[0]._}
                handleOnClick={handleOnClick}
                bookCover={{ ...book }.best_book[0].image_url[0]}
                bookTitle={{ ...book }.best_book[0].title[0]}
                bookAuthor={{ ...book }.best_book[0].author[0].name[0]}
                bookYear={{ ...book }.original_publication_year[0]._}
                bookRating={{ ...book }.average_rating[0]}
              />
            );
          }
        })
      ) : (
        <div className="ui error message" style={{ marginTop: "2vh" }}>
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
            <Button color="olive">Search</Button>
          </Form.Field>
        </Form>

        <Container>
          <Grid columns={2}>
            <Grid.Column>{bookData}</Grid.Column>
            <Grid.Column style={{ marginTop: "3vh" }}>
              {addSuccess === false ? (
                <div></div>
              ) : (
                <Message
                  success
                  header="Add Sucessful!"
                  content="You can check your favorite book from My Favoriate."
                />
              )}
            </Grid.Column>
          </Grid>
        </Container>
      </Container>
    );
  }
}
