import React, { Component } from 'react';
import BookResult from '../BookResult/BookResult'
import FavoriteBooks from '../FavoriteBooks/FavoriteBooks'


class NavBar extends Component{
    render(){
        console.log(this.props.favoriteBooks)
        return(
            <div className = "navBar" style={{display : 'flex'}}>
                <div>
                    <BookResult 
                        books = {this.props.books}
                        handleOnClick = {this.props.handleOnClick}
                    />
                </div>
                
                <div>
                    <FavoriteBooks 
                        favoriteBooks = {this.props.favoriteBooks}
                        // favoriteBook = {this.props.favoriteBook}
                        handleOnClick2 = {this.props.handleOnClick2}
                    />
                </div> 
            </div>
        )
    }
}
export default NavBar