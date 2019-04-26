import React, { Component } from 'react';
import {Route, Link, Redirect} from 'react-router-dom'
import BookResult from './components/BookResult/BookResult'
import FavoriteBooks from './components/FavoriteBooks/FavoriteBooks'
import './App.css';
import axios from 'axios'
let convert = require('xml-to-json-promise');
let parseString = require('xml2js').parseString;


class App extends Component {
  constructor(){
    super();

    this.state={
      inputValue: '',
      books: [],
      favoriteBooks: [],
      target: null,
    }
  }

  fetchData = async (evt) => {
    try {
      evt.preventDefault();
      const fetchCall =  await axios({
        url:`https://www.goodreads.com/search/index.xml?key=${process.env.REACT_APP_BOOK_KEY}&q=${this.state.inputValue}`,
        method: 'get'
      })
      
      let xml = fetchCall.data;
      let jsonData = [];
      await convert.xmlDataToJSON(fetchCall.data).then(json => {
        jsonData = json.GoodreadsResponse.search[0].results[0].work
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
          books: booksData,
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

    await this.setState(prevState => ({
      favoriteBooks: [...prevState.favoriteBooks,newBook],
    }))

    console.log(this.state.favoriteBooks)
  }


  handleOnClick2 = async (id) => {
    console.log('this is the id i am going to delete ' + id)
    const {favoriteBooks} = this.state
    console.log('favoriate book before splice' + this.state.favoriteBooks)
    favoriteBooks.splice(id, 1);
    console.log('favoriate book after splice ' + this.state.favoriteBooks)
    
    await this.setState(prevState => ({
        favoriteBooks: this.state.favoriteBooks.filter(b=>{
            return b.isFavoriateBook === true
        })
    }))
  }


  render = () => {
    console.log('my favoriteBooks in render'+ this.state.favoriteBooks)

    const isBookHere = (this.state.books.length>0)?
    <Route 
      exact path="/"
      render={()=> 
        <Redirect
          to={{
          pathname: "./BookResult",
        }}/> }
    />
    :null

    return (
      <div className="App">
          <nav>
              <h1>Book Club</h1>

              <form onSubmit={this.fetchData}>
                  <input 
                    placeholder = "title of the book" 
                    value={this.state.inputValue}
                    onChange={this.handleOnChange}
                  />
                  <button type="submit">search</button>
              </form>

              <div className = "list">
                <p className = "bookResult"><Link to="/BookResult"  style={{fontSize:'30px', color:'gray' }}>Book search result</Link></p>
                <button className = "myFavorite"><Link to="FavoriteBooks"  style={{ textDecoration: 'none' ,fontSize:'20px', color:'gray'}}>My favorite books</Link></button>
              </div>
          </nav>
      
          <main>
              {isBookHere}
              <Route
                exact path = "/BookResult"
                render={()=><BookResult
                    books = {this.state.books}
                    handleOnClick = {this.handleOnClick}
                    favoriteBooks = {this.state.favoriteBooks}
                    handleOnClick2 = {this.handleOnClick2}
                />}
              />

              <Route
                path = "/FavoriteBooks"
                render={()=><FavoriteBooks
                  favoriteBooks = {this.state.favoriteBooks}
                  handleOnClick2 = {this.handleOnClick2}
                />}
              />
          </main>  
      </div>
    );
  }
}

export default App;
