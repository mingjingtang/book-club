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
                <div>
                <BookList 
                    books={this.props.books}
                    handleOnClick = {this.props.handleOnClick}
                />
                </div>
                
                <div className = "favoriteBooks">
                <FavoriteBooks
                    favoriteBooks = {this.props.favoriteBooks}
                        // favoriteBook = {this.props.favoriteBook}
                    handleOnClick2 = {this.props.handleOnClick2}
                />
                </div> 
            </div>
        )
    }
}
export default BookResult