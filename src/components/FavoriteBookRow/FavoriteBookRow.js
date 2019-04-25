import React, { Component } from 'react';

class FavoriteBookRow extends Component{
    render(){
        // const deleteBook = {
        //     cover: `${this.props.bookCover}`,
        //     title: `${this.props.bookTitle}`,
        //     author:`${this.props.bookAuthor}`,
        //     year: `${this.props.bookYear}`,
        //     rating: `${this.props.bookRating}`,
        //     isFavoriateBook: false
        // }
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
                        // onClick={(e) => {this.props.handleOnClick2(deleteBook)}}>
                        onClick = {this.props.handleOnClick2}>
                        Delete
                </button>
            </div>
        )
    }
}

export default FavoriteBookRow