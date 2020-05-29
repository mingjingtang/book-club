import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import FavoriteBooks from "./components/FavoriteBooks/FavoriteBooks";
import MenuNav from "./components/MenuNav/MenuNav";
import Home from "./components/Home/Home";
import { bookGetter } from "./services/api";
import "./App.css";
let convert = require("xml-to-json-promise");

class App extends Component {
  state = {
    books: [],
    favoriteBooks: [],
    inputValue: "",
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

  handleOnClick = async (newBook) => {
    this.setState((prevState) => ({
      favoriteBooks: [...prevState.favoriteBooks, newBook],
    }));
  };

  handleOnClick2 = async (id) => {
    console.log("this is the id i am going to delete " + id);
    const { favoriteBooks } = this.state;
    console.log("favoriate book before splice" + this.state.favoriteBooks);
    favoriteBooks.splice(id, 1);
    console.log("favoriate book after splice " + this.state.favoriteBooks);

    this.setState((prevState) => ({
      favoriteBooks: this.state.favoriteBooks.filter((b) => {
        return b.isFavoriateBook === true;
      }),
    }));
  };

  render() {
    const { books, inputValue } = this.state;

    return (
      <main>
        <MenuNav />
        <Redirect to="/Home" />
        <Route
          path="/Home"
          render={() => (
            <Home
              books={books}
              inputValue={inputValue}
              fetchData={this.fetchData}
              handleOnClick={this.handleOnClick}
              handleOnChange={this.handleOnChange}
            />
          )}
        />
        <Route
          path="/myFavorite"
          render={() => (
            <FavoriteBooks
              favoriteBooks={this.state.favoriteBooks}
              handleOnClick2={this.handleOnClick2}
            />
          )}
        />
        {/* 
          <div className="columns">
            <p className="column">
              <Link
                to="/BookResult"
                style={{ fontSize: "30px", color: "gray" }}
              >
                Book search result
              </Link>
            </p>
            <p className="column">
              <Link
                to="FavoriteBooks"
                style={{ fontSize: "30px", color: "gray" }}
              >
                My favorite books
              </Link>
            </p>
          </div>
        </div> */}
      </main>
    );
  }
}

export default App;
