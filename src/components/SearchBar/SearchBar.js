import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'

class SearchBar extends Component{
    render(){
        return(
            <form onSubmit={this.props.fetchData}>
                <input 
                    placeholder = "title of the book" 
                    value={this.props.inputValue}
                    onChange={this.props.handleOnChange}
                />
                <button type="submit">search</button>
            </form>
                
        )
    }
}
export default SearchBar