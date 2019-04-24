import React, { Component } from 'react';

class BookRow extends Component{
    render(){
        const newFavoriateBook = {
            cover: `${this.props.bookCover}`,
            title: `${this.props.bookTitle}`,
            author:`${this.props.bookAuthor}`,
            year: `${this.props.bookYear}`,
            rating: `${this.props.bookRating}`
        }
        console.log('new favoriate book candidate ' + newFavoriateBook.title);

        console.log(this.props.isFavoriteBooks)
        
        const buttonSwitch = () => {
            if(this.props.isFavoriteBooks === true){
                return(
                        "delete"
                )
            }
            else{
                return(
                        "Add to my list"
                )
            }
        }
        

        return(
            <div> 
                <div>
                    <img src = {this.props.bookCover} alt="new image"/>
                    <p>Title: {this.props.bookTitle}</p>
                    <p>Author: {this.props.bookAuthor}</p>
                    <p>Year: {this.props.bookYear}</p>
                    <p>Rating: {this.props.bookRating}</p>
                </div>

                
                <button 
                        onClick={ (e) => (this.props.handleOnClick(newFavoriateBook))}>
                        {buttonSwitch()}
                </button>
            </div>
        )
    }
}
export default BookRow