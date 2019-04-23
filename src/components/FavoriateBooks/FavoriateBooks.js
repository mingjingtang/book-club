import React, { Component } from 'react';
import BookList from '../BookList/BookList'

class FavoriateBooks extends Component{
    render(){
        console.log(this.props.books)
        return(
            <div className = "myFavoriteBooks">
                <h2>FavoriateBooks</h2>
                <BookList 
                    books = {this.props.favoriateBooks}
                    handleOnClick = {this.props.handleOnClick}
                />
            </div>
        )
    }
}
export default FavoriateBooks