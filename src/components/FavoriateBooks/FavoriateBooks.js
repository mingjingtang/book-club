import React, { Component } from 'react';
import BookList from '../BookList/BookList'

class FavoriateBooks extends Component{
    render(){
        // this.setState({
        //     isFavoriteBooks: true
        // })
        // console.log(this.props.isFavoriteBooks)

        console.log(this.props.isFavoriteBooks)
        return(
            <div className = "myFavoriteBooks">
                <h2>FavoriateBooks</h2>
                <BookList 
                    books = {this.props.favoriateBooks}
                    handleOnClick = {this.props.handleOnClick}
                    // isFavoriteBooks = {this.props.isFavoriteBooks}
                />
            </div>
        )
    }
}
export default FavoriateBooks