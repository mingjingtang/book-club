import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.props.term);
  };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div>
        <form onFormSubmit={this.props.onFormSubmit}>
          <div className="field is-grouped">
            <input
              className="input"
              type="text"
              placeholder="title of the book"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <button className="button is-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
