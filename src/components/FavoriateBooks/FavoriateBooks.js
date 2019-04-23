import React, { Component } from 'react';
import BookList from '../BookList/BookList'

class FavoriateBooks extends Component{
    render(){
        return(
            <div>
                <p>FavoriateBooks</p>
                <BookList/>
            </div>
        )
    }
}
export default FavoriateBooks