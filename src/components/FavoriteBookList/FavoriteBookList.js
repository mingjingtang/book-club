import React, { Component } from 'react';
import FavoriteBookRow from '../FavoriteBookRow/FavoriteBookRow'

class FavoriteBookList extends Component{
    render(){
        let renderFavoriteBooks = this.props.favoriteBooks? this.props.favoriteBooks.map((book, index) => {
            return <FavoriteBookRow  
                favoriteBook = {this.props.favoriteBook}
                key = {index}
                bookCover = {book.cover}
                bookTitle = {book.title}
                bookAuthor = {book.author}
                bookYear = {book.year}
                bookRating = {book.rating}
            />
        }) : null;

        console.log('my favorite books', this.props.favoriteBooks)
        return(
            <div className = "favoriteBookList">
                {renderFavoriteBooks}
            </div>
        )
    }
}

export default FavoriteBookList