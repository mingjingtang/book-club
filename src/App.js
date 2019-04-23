import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import NavBar from './components/NavBar/NavBar'
import axios from 'axios'
let convert = require('xml-to-json-promise');
let parseString = require('xml2js').parseString;



class App extends Component {
  constructor(){
    super();

    this.state={
      books: [],
      favoriteBooks: [],
      inputValue: ''
    }
  }

  fetchData = async (evt) => {
    try {
      evt.preventDefault();
      const fetchCall =  await axios({
        url:`https://www.goodreads.com/search/index.xml?key=${process.env.REACT_APP_BOOK_KEY}&q=${this.state.inputValue}`,
        method: 'get'
      })
      console.log(fetchCall)
      let xml = fetchCall.data;
      let jsonData = [];
      await convert.xmlDataToJSON(fetchCall.data).then(json => {
        jsonData = json.GoodreadsResponse.search[0].results[0].work
        console.log("xml :",json);
      })
      
      let booksData = jsonData.map((book, index) => (
        {
          cover: book.best_book[0].image_url[0],
          title: book.best_book[0].title[0],
          author: book.best_book[0].author[0].name[0],
          year: book.original_publication_year[0]._,
          rating: book.average_rating[0]
        }  
      ))
      console.log("booksData info:",booksData)
      parseString(xml, (err,result) => console.log(JSON.stringify(result)))

      this.setState(prevState => ({
          books: booksData
      }))

      
    } catch (err) {
      console.log('error', err.message);
    }
  }

  handleOnChange = (evt) => {
    this.setState({
      inputValue: evt.target.value
    })
  }

  handleOnClick = async(newBook) => {
    console.log('this component is clicked')
    const {favoriteBooks} = this.state
    let newList = favoriteBooks.filter(book => book.title !== newBook.title)
    await this.setState(prevState => ({
      favoriteBooks: [...newList,newBook], 
    }))
    console.log(this.state.favoriteBooks)

  }


  render() {
    return (
      <div className="App">
          <div className = "search">
              <h2>Book Club App</h2>
              <SearchBar
                  books = {this.state.books}
                  inputValue = {this.state.inputValue}
                  handleOnChange = {this.handleOnChange}
                  fetchData = {this.fetchData}
              />
          </div>
      
          <div className = "seachResult">
               <NavBar 
                  books = {this.state.books}
                  favoriateBooks = {this.state.favoriteBooks}
                  handleOnClick = {this.handleOnClick}
              />
          </div>  
      </div>
    );
  }
  
}

export default App;
