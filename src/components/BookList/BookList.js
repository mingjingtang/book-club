import React from 'react'
import BookRow from '../BookRow/BookRow'

class BookList extends Component{
    render(){
        return(
            <div>
                <ul>
                <BookRow/>
                </ul>
            </div>
        )
    }
}
export default BookList