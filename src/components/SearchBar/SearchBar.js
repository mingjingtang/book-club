import React from "react";

const SearchBar = props => {
  return (
    <div>
      <form className="field is-grouped" onSubmit={props.onSubmit}>
        <p className="control is-expanded">
          <input
            className="input"
            type="text"
            placeholder="title of the book"
          />
        </p>

        <input
          className="button is-primary"
          type="submit"
          value="Search"
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
