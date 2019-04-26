import React, { Component } from 'react';

class BookRow extends Component{
    render(){
        const newFavoriateBook = {
            cover: `${this.props.bookCover}`,
            title: `${this.props.bookTitle}`,
            author:`${this.props.bookAuthor}`,
            year: `${this.props.bookYear}`,
            rating: `${this.props.bookRating}`,
            isFavoriateBook: true
        }

        return(
            <div> 
                <div>
                    <img src = {this.props.bookCover} alt=""/>
                    <p>Title: {this.props.bookTitle}</p>
                    <p>Author: {this.props.bookAuthor}</p>
                    <p>Year: {this.props.bookYear}</p>
                    <p>Rating: {this.props.bookRating}</p>
                </div>

                
                <button 
                        onClick={ (e) => (this.props.handleOnClick(newFavoriateBook))}>
                        Add to my favoriate list
                </button>
            </div>
        )
    }
}
export default BookRow