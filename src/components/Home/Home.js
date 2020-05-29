import React, { Component } from "react";
import "./Home.css";
import BookList from "../BookList/BookList";
import { bookGetter } from "../../services/api";
let convert = require("xml-to-json-promise");

class Home extends Component {
  state = {
    inputValue: "",
    books: [],
    dataPresent: null,
  };

  handleOnChange = (evt) => {
    this.setState({
      inputValue: evt.target.value,
    });
  };

  fetchData = async (event) => {
    event.preventDefault();

    const data = await bookGetter(this.state.inputValue);

    if (data.data !== "FAILED") {
      //convert data to json.
      let jsonData = [];
      await convert.xmlDataToJSON(data.data).then((json) => {
        jsonData = json.GoodreadsResponse.search[0].results[0].work;
      });

      let booksData = jsonData.map((book, index) => ({
        cover: book.best_book[0].image_url[0],
        title: book.best_book[0].title[0],
        author: book.best_book[0].author[0].name[0],
        year: book.original_publication_year[0]._,
        rating: book.average_rating[0],
      }));
      console.log("booksData info:", booksData);

      this.setState((prevState) => ({
        books: booksData,
        dataPresent: true,
      }));
    } else {
      this.setState({
        dataPresent: false,
      });
    }
  };

  render() {
    const books =
      this.state.books.length !== 0 ? (
        <BookList books={this.state.books} handleOnClick={this.handleOnClick} />
      ) : null;

    return (
      <main>
        <form className="field is-grouped" onSubmit={this.fetchData}>
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="title or author of the book"
              value={this.state.inputValue}
              onChange={this.handleOnChange}
            />
          </p>

          <input
            className="button is-info"
            type="submit"
            value="Search"
          ></input>
        </form>

        {books}
      </main>
    );
  }
}
export default Home;
