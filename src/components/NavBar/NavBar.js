import React, { Component } from 'react';
import BookResult from '../BookResult/BookResult'
import FavoriateBooks from '../FavoriateBooks/FavoriateBooks'


class NavBar extends Component{
    render(){
        console.log(this.props.books)
        return(
            <div className = "navBar">
                <BookResult 
                    books = {this.props.books}
                    handleOnClick = {this.props.handleOnClick}
                    isFavoriteBooks = {this.props.isFavoriteBooks}
                />
                <FavoriateBooks 
                    favoriateBooks = {this.props.favoriateBooks}
                    handleOnClick = {this.props.handleOnClick}
                    isFavoriteBooks = {this.props.isFavoriteBooks}
                />
            </div>
        )
    }
}
export default NavBar