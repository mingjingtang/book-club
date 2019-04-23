import React, { Component } from 'react';
import RecentRelease from '../RecentRelease/RecentRelease'
import FavoriateBooks from '../FavoriateBooks/FavoriateBooks'


class NavBar extends Component{
    render(){
        return(
            <div className = "navBar">
                <RecentRelease/>
                <FavoriateBooks/>
            </div>
        )
    }
}
export default NavBar