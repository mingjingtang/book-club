import React from "react";
import goodReads from "./apis/goodReads";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import BookResult from "./components/BookResult/BookResult";
import FavoriteBooks from "./components/FavoriteBooks/FavoriteBooks";

let convert = require("xml-to-json-promise");
let parseString = require("xml2js").parseString;

class App extends React.Component {
  state = {
    inputValue: "",
    books: [],
    favoriteBooks: [],
    target: null
  };

  onTermSubmit = async term => {
    try {
      term.preventDefault();
      const fetchCall = await goodReads.get("/search/index.xml", {
        params: {
          q: this.state.inputValue
        }
      });

      let xml = fetchCall.data;
      let jsonData = [];
      await convert.xmlDataToJSON(fetchCall.data).then(json => {
        jsonData = json.GoodreadsResponse.search[0].results[0].work;
      });

      let booksData = jsonData.map((book, index) => ({
        cover: book.best_book[0].image_url[0],
        title: book.best_book[0].title[0],
        author: book.best_book[0].author[0].name[0],
        year: book.original_publication_year[0]._,
        rating: book.average_rating[0]
      }));
      console.log("booksData info:", booksData);
      parseString(xml, (err, result) => console.log(JSON.stringify(result)));

      this.setState(prevState => ({
        books: booksData
      }));
    } catch (err) {
      console.log("error", err.message);
    }
  };

  handleOnChange = evt => {
    this.setState({
      inputValue: evt.target.value
    });
  };

  handleOnClick = async newBook => {
    console.log("this component is clicked");

    await this.setState(prevState => ({
      favoriteBooks: [...prevState.favoriteBooks, newBook]
    }));

    console.log(this.state.favoriteBooks);
  };

  handleOnClick2 = async id => {
    console.log("this is the id i am going to delete " + id);
    const { favoriteBooks } = this.state;
    console.log("favoriate book before splice" + this.state.favoriteBooks);
    favoriteBooks.splice(id, 1);
    console.log("favoriate book after splice " + this.state.favoriteBooks);

    await this.setState(prevState => ({
      favoriteBooks: this.state.favoriteBooks.filter(b => {
        return b.isFavoriateBook === true;
      })
    }));
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1 className="title is-1 is-spaced">Book Club</h1>
          <div className="ui container">
            <SearchBar onSubmit={this.onTermSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
