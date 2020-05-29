import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import FavoriteBooks from "./components/FavoriteBooks/FavoriteBooks";
import Home from "./components/Home/Home";
import "./App.css";

class App extends Component {
  state = {
    favoriteBooks: [],
    // target: null,
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
    return (
      <main>
        <nav
          className="navbar is-primary"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-start">
            <p
              className="title is-2"
              style={{
                textAlign: "center",
                marginTop: "1vh",
                marginRight: "2vh",
                marginBottom: "1vh",
                marginLeft: "2vh",
              }}
            >
              Book Club
            </p>

            <Link to="/Home">Home</Link>
            <Link exact to="/myFavorite">
              My favoriate
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </nav>

        <Redirect to="/Home" />
        <Route exact path="/Home">
          <Home />
        </Route>
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
