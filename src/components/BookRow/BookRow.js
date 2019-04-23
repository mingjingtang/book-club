import React, { Component } from 'react';

class BookRow extends Component{
    render(){
        const newFavoriateBook = {
            img: `${this.props.bookCover}`,
            title: `${this.props.bookTitle}`,
            author:`${this.props.bookAuthor}`,
            year: `${this.props.bookYear}`,
            rating: `${this.props.bookRating}`
        }
        console.log('new favoriate book candidate ' + newFavoriateBook);
    
        return(
            <div> 
                <div>
                    <img src = {this.props.bookCover} alt="new image"/>
                    <p>Title: {this.props.bookTitle}</p>
                    <p>Author: {this.props.bookAuthor}</p>
                    <p>Year: {this.props.bookYear}</p>
                    <p>Rating: {this.props.bookRating}</p>
                </div>

                <button 
                    onClick={() => this.props.handleOnClick(this.newFavoriateBook)}
                    >Add to my FavoriteList</button>
            </div>
        )
    }
}
export default BookRow