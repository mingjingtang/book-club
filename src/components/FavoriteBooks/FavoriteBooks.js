import React, { Component } from 'react';
import FavoriteBookList from '../FavoriteBookList/FavoriteBookList'
import '../FavoriteBooks/FavoriteBooks.css'

class FavoriteBooks extends Component{
    render(){
        console.log(this.props.favoriteBooks)
        return(
            <div className = "myFavoriteBooks">
                <FavoriteBookList 
                    favoriteBooks = {this.props.favoriteBooks}
                    handleOnClick2 = {this.props.handleOnClick2}
                />
            </div>
        )
    }
}
export default FavoriteBooks