import React, { Component } from 'react';
import BookList from '../BookList/BookList';
import '../BookResult/BookResult.css';
import FavoriteBooks from '../FavoriteBooks/FavoriteBooks'

class BookResult extends Component{
    render(){
        console.log(this.props.books)
        return(
            <div className = "bookResult" style={{display: 'flex'}}>
                <h2>Book search result</h2>
                <BookList 
                    books={this.props.books}
                    handleOnClick = {this.props.handleOnClick}
                />
                {/* <p>my favoriate book</p> */}
                <FavoriteBooks
                    favoriteBooks = {this.props.favoriteBooks}
                        // favoriteBook = {this.props.favoriteBook}
                    handleOnClick2 = {this.props.handleOnClick2}
                />
            </div>
        )
    }
}
export default BookResult