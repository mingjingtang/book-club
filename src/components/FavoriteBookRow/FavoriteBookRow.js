import React, { Component } from 'react';
import '../FavoriteBookRow/FavoriteBookRow.css'

class FavoriteBookRow extends Component{
    render(){
        console.log(this.props.id)
        return(
            <div className = "favoriteBookRow">
                <div>
                    <img src = {this.props.bookCover} alt=""/>
                    <p>Title: {this.props.bookTitle}</p>
                    <p>Author: {this.props.bookAuthor}</p>
                    <p>Year: {this.props.bookYear}</p>
                    <p>Rating: {this.props.bookRating}</p>
                </div>

                
                <button className="button is-rounded"
                        onClick = {(e) => this.props.handleOnClick2(this.props.id)}>
                        Delete
                </button>
            </div>
        )
    }
}

export default FavoriteBookRow