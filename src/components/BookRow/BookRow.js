import React, { Component } from 'react';

class BookRow extends Component{
    render(){
        return(
            <div>
                <p>Cover</p>
                <p>Title</p>
                <p>Author</p>
                <p>Year</p>
                <p>Rating</p>
            </div>
        )
    }
}
export default BookRow