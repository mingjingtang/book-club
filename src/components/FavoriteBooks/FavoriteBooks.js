import React, { Component } from 'react';
import FavoriteBookList from '../FavoriteBookList/FavoriteBookList'

class FavoriteBooks extends Component{
    render(){
        console.log(this.props.favoriteBooks)
        return(
            <div className = "myFavoriteBooks">
                <h2>Favorite Books</h2>
                <FavoriteBookList 
                    favoriteBooks = {this.props.favoriteBooks}
                    favoriteBook = {this.props.favoriteBook}
                />
            </div>
        )
    }
}
export default FavoriteBooks