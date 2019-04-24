import React, { Component } from 'react';
import BookResult from '../BookResult/BookResult'
import FavoriteBooks from '../FavoriteBooks/FavoriteBooks'


class NavBar extends Component{
    render(){
        console.log(this.props.favoriteBooks)
        return(
            <div className = "navBar">
                <BookResult 
                    books = {this.props.books}
                    handleOnClick = {this.props.handleOnClick}
                />
                <FavoriteBooks 
                    favoriteBooks = {this.props.favoriteBooks}
                    favoriteBook = {this.props.favoriteBook}
                />
            </div>
        )
    }
}
export default NavBar