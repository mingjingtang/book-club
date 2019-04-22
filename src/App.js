import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import NavBar from './components/NavBar/NavBar'

class App extends Component {

  componentDidMount(){
    // const grEndpoint = `https://www.goodreads.com/book/isbn_to_id/0486275507?key=${process.env.REACT_APP_BOOK_KEY}`
    // const grEndpoint = `https://www.goodreads.com/book/title.xml?key=${process.env.REACT_APP_BOOK_KEY}&title=Hound+of+the+Baskervilles`
    const grEndpoint = `https://www.goodreads.com/author/list/18541?&key=${process.env.REACT_APP_BOOK_KEY}`
    fetch(grEndpoint)
      // .then(res => res.text())          // convert to plain text
      // .then(text => 
      //   // comment this out temporarily
      // console.log(JSON.parse(text)))
      // JSON.parse(someString)  // comment this out temporarily
      .then(response => response.json())
      .then(data =>{
        console.log(data.data)
      })
  }

  render() {
    return (
      <div className="App">
        <h2>Book Club App</h2>
        <SearchBar/>
        <NavBar/>
      </div>
    );
  }
}

export default App;
