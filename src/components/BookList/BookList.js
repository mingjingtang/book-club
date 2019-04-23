import React, { Component } from 'react';
import BookRow from '../BookRow/BookRow'

class BookList extends Component{
    renderBooks = () => {
        return this.props.books.map((book, index) => {
            return <BookRow 
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
    render(){
        // console.log('books', this.props.books)
        // const checkRender = this.props.books ? this.renderBooks() : <h1>Render my favorite books</h1>
        return(
            <div className = "bookList">
                {/* {checkRender} */}
                {this.renderBooks()}
            </div>
        )
    }
}
export default BookList