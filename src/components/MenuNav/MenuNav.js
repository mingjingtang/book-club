import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default class MenuNav extends React.Component {
  render() {
    return (
      <Menu>
        <Menu.Item header>Book Club</Menu.Item>
        <Link to="/Home">
          <Menu.Item name="Home" />
        </Link>

        <Link to="/myFavorite">
          <Menu.Item name="myFavorite" />
        </Link>

        <Menu.Menu position="right">
          <Menu.Item>
            <p>Sign up</p>
          </Menu.Item>
          <Menu.Item>
            <p>Log in</p>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
