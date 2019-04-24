import React, { Component } from 'react';

class FavoriteBookRow extends Component{
    render(){
        return(
            <div> 
                <div>
                    <img src = {this.props.bookCover} alt="new image"/>
                    <p>Title: {this.props.bookTitle}</p>
                    <p>Author: {this.props.bookAuthor}</p>
                    <p>Year: {this.props.bookYear}</p>
                    <p>Rating: {this.props.bookRating}</p>
                </div>

                
                <button>
                        {/* onClick={ (e) => (this.props.handleOnClick(newFavoriateBook))}> */}
                        Delete
                </button>
            </div>
        )
    }
}

export default FavoriteBookRow