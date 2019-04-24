import React, { Component } from 'react';
import BookList from '../BookList/BookList';

class BookResult extends Component{
    render(){
        console.log(this.props.books)
        return(
            <div className = "bookResult">
                <h2>Book search result</h2>
                <BookList 
                    books={this.props.books}
                    handleOnClick = {this.props.handleOnClick}
                    isFavoriteBooks = {this.props.isFavoriteBooks}
                />
            </div>
        )
    }
}
export default BookResult