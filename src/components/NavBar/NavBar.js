import React from 'react'
import RecentRelease from '../RecentRelease/RecentRelease'
import FavoriateBooks from '../FavoriateBooks/FavoriateBooks'

class NavBar extends Component{
    render(){
        return(
            <div>
                <RecentRelease/>
                <FavoriateBooks/>
            </div>
        )
    }
}
export default NavBar