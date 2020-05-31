import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import FavoriteBooks from "./components/FavoriteBooks/FavoriteBooks";
import MenuNav from "./components/MenuNav/MenuNav";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { bookGetter } from "./services/api";
import "./App.css";
let convert = require("xml-to-json-promise");

class App extends Component {
  state = {
    books: [],
    favoriteBooks: [],
    dataPresent: null,
    loggedIn: true,
    wrongSubmit: "",
  };

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  fetchData = async (event) => {
    event.preventDefault();

    const data = await bookGetter(this.state.bookInfo);

    //convert data to json.
    let jsonData = [];
    await convert.xmlDataToJSON(data.data).then((json) => {
      jsonData = json.GoodreadsResponse.search[0].results[0].work;
    });

    if (jsonData !== undefined) {
      let booksData = jsonData.map((book, index) => ({
        cover: book.best_book[0].image_url[0],
        title: book.best_book[0].title[0],
        author: book.best_book[0].author[0].name[0],
        year: book.original_publication_year[0]._,
        rating: book.average_rating[0],
      }));

      this.setState({
        books: booksData,
        dataPresent: true,
        bookInfo: "",
      });
    } else {
      this.setState({
        dataPresent: false,
        wrongSubmit: this.state.bookInfo,
        bookInfo: "",
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
    const {
      books,
      inputValue,
      loggedIn,
      dataPresent,
      wrongSubmit,
      bookInfo,
    } = this.state;

    return (
      <main>
        {!loggedIn ? (
          <Route exact path="/" render={() => <Login />} />
        ) : (
          <>
            <MenuNav />
            <Redirect to="/Home" />
            <Route
              path="/Home"
              render={() => (
                <Home
                  bookInfo={bookInfo}
                  dataPresent={dataPresent}
                  books={books}
                  inputValue={inputValue}
                  fetchData={this.fetchData}
                  wrongSubmit={wrongSubmit}
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
          </>
        )}
      </main>
    );
  }
}

export default App;
