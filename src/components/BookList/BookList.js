import React, { Component } from 'react';
import BookRow from '../BookRow/BookRow'

class BookList extends Component{
    renderBooks = () => {
        return this.props.books.map((book, index) => {
            return <BookRow 
                isFavoriteBooks = {this.props.isFavoriteBooks}
                handleOnClick = {this.props.handleOnClick} 
                key = {index}
                bookCover = {book.cover}
                bookTitle = {book.title}
                bookAuthor = {book.author}
                bookYear = {book.year}
                bookRating = {book.rating}
            />
        })
    }

    // renderFavoriteBooks = () => {
    //     return this.props.favoriateBooks.map((book, index) => {
    //         return <BookRow 
    //             isFavoriteBooks = {true}
    //             handleOnClick = {this.props.handleOnClick} 
    //             key = {index}
    //             bookCover = {book.cover}
    //             bookTitle = {book.title}
    //             bookAuthor = {book.author}
    //             bookYear = {book.year}
    //             bookRating = {book.rating}
    //         />
    //     })
    // }

    render(){
        console.log('books', this.props.books)
        // console.log('my favorite books', this.props.favoriateBooks)
        // const checkRender = this.props.books ? this.renderBooks() : this.renderFavoriteBooks()
    
        return(
            <div className = "bookList">
                {/* {checkRender} */}
                {this.renderBooks()}
            </div>
        )
    }
}
export default BookList