import React, { Component } from 'react';
import BookList from '../BookList/BookList';

class RecentRelease extends Component{
    render(){
        return(
            <div>
                <p>RecentRelease</p>
                <BookList/>
            </div>
        )
    }
}
export default RecentRelease