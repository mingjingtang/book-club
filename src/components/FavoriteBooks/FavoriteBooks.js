import React, { Component } from 'react';
import FavoriteBookList from '../FavoriteBookList/FavoriteBookList'

class FavoriteBooks extends Component{
    render(){
        console.log(this.props.favoriteBooks)
        return(
            <div className = "myFavoriteBooks" style={{alignSelf: 'flex-end'}}>
                <h2>Favorite Books</h2>
                <FavoriteBookList 
                    favoriteBooks = {this.props.favoriteBooks}
                    // favoriteBook = {this.props.favoriteBook}
                    handleOnClick2 = {this.props.handleOnClick2}
                />
            </div>
        )
    }
}
export default FavoriteBooks