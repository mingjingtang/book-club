import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import FavoriteBookList from "./components/FavoriteBookList/FavoriteBookList";
import MenuNav from "./components/MenuNav/MenuNav";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { bookGetter } from "./services/api";
import "./App.css";
let convert = require("xml-to-json-promise");

class App extends Component {
  state = {
    bookInfo: "",
    books: [],
    favoriteBooks: [],
    dataPresent: null,
    loggedIn: true,
    wrongSubmit: "",
    addSuccess: null,
    deleteSuccess: null,
  };

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onSearchSubmit = async (event) => {
    event.preventDefault();

    const data = await bookGetter(this.state.bookInfo);

    let jsonData = [];
    await convert.xmlDataToJSON(data.data).then((json) => {
      jsonData = json.GoodreadsResponse.search[0].results[0].work;
    });

    if (jsonData !== undefined) {
      let booksData = jsonData.map((book, index) => ({
        bookId: book.best_book[0].id[0]._,
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

  HandleAddOnClick = async (newBook) => {
    const { favoriteBooks, addSuccess } = this.state;

    console.log("newbook id " + newBook.bookId);

    let i = 0;
    while (i < favoriteBooks.length) {
      if (newBook.bookId === favoriteBooks[i].bookId) {
        this.setState({ addSuccess: false });
      }
      i++;
    }

    if (i === favoriteBooks.length && addSuccess === null) {
      this.setState((prevState) => ({
        favoriteBooks: [...prevState.favoriteBooks, newBook],
      }));
      this.setState({ addSuccess: true });
    }
  };

  HandleDeleteOnClick = async (id) => {
    this.state.favoriteBooks.splice(id, 1);
  };

  render() {
    const {
      books,
      inputValue,
      loggedIn,
      dataPresent,
      wrongSubmit,
      bookInfo,
      favoriteBooks,
      addSuccess,
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
                  fetchData={this.onSearchSubmit}
                  wrongSubmit={wrongSubmit}
                  handleOnClick={this.HandleAddOnClick}
                  handleOnChange={this.handleOnChange}
                  addSuccess={addSuccess}
                />
              )}
            />
            <Route
              path="/myFavorite"
              render={() => (
                <FavoriteBookList
                  favoriteBooks={favoriteBooks}
                  handleOnClick2={this.HandleDeleteOnClick}
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
