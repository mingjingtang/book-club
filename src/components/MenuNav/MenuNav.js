import React from "react";
import { Link } from "react-router-dom";

export default class MenuNav extends React.Component {
  render() {
    return (
      <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-start">
          <p
            className="title is-2"
            style={{
              textAlign: "center",
              marginTop: "1vh",
              marginRight: "2vh",
              marginBottom: "1vh",
              marginLeft: "2vh",
            }}
          >
            Book Club
          </p>

          <Link to="/Home">Home</Link>
          <Link to="/myFavorite">My favoriate</Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </nav>
      // <div>Navbar</div>
    );
  }
}
