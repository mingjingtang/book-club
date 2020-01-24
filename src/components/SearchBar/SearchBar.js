import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="field is-grouped">
            <input
              className="input"
              type="text"
              placeholder="title of the book"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <button className="button is-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
