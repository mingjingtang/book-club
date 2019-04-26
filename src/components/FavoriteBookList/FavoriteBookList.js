import React, { Component } from 'react';
import FavoriteBookRow from '../FavoriteBookRow/FavoriteBookRow'
import '../FavoriteBookList/FavoriteBookList.css'

class FavoriteBookList extends Component{
    render(){
        let renderFavoriteBooks = this.props.favoriteBooks? this.props.favoriteBooks.map((book, index) => {
            return <FavoriteBookRow  
                handleOnClick2 = {this.props.handleOnClick2}
                key = {index}
                id = {index}
                bookCover = {book.cover}
                bookTitle = {book.title}
                bookAuthor = {book.author}
                bookYear = {book.year}
                bookRating = {book.rating}
            />
        }) : null;


        return(
            <div className = "favoriteBookList">
                {renderFavoriteBooks}
            </div>
        )
    }
}

export default FavoriteBookList