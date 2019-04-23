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

                />
                <FavoriateBooks 
                    // pass my favoriate book list
                    // books = {this.props.books}
                    favoriateBooks = {this.props.favoriateBooks}
                    handleOnClick = {this.props.handleOnClick}
                />
            </div>
        )
    }
}
export default NavBar