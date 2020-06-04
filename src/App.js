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
    addSuccess: false,
    deleteSuccess: false,
  };

  componentDidCatch(error, info) {
    this.setState({ dataPresent: false });
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onSearchSubmit = async (event) => {
    event.preventDefault();

    const data = await bookGetter(this.state.bookInfo);

    if (data.data !== "FAILED") {
      let jsonData = [];
      await convert.xmlDataToJSON(data.data).then((json) => {
        jsonData = json.GoodreadsResponse.search[0].results[0].work;
      });

      console.log(jsonData);

      if (jsonData !== undefined) {
        this.setState({
          books: jsonData,
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
    }
  };

  HandleAddOnClick = async (newBook) => {
    this.setState((prevState) => ({
      favoriteBooks: [...prevState.favoriteBooks, newBook],
      addSuccess: true,
    }));

    this.timeout = setTimeout(() => {
      this.setState({ addSuccess: false });
    }, 2000);
  };

  HandleDeleteOnClick = async (id) => {
    this.setState({
      favoriteBooks: this.state.favoriteBooks.filter(
        (item) => item.bookId !== id
      ),
    });

    this.setState({ deleteSuccess: true });

    this.timeout = setTimeout(() => {
      this.setState({ deleteSuccess: false });
    }, 2000);
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
      deleteSuccess,
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
                  deleteSuccess={deleteSuccess}
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
