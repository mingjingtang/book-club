import React from 'react'

class SearchBar extends Component{
    render(){
        return(
            <div>
                <input placeholder = "title of the book"/>
                <button type = "submit">search</button>
            </div>
        )
    }
}
export default SearchBar