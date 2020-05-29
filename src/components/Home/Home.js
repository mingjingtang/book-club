import React from "react";
import BookList from "../BookList/BookList";

export default class MenuNav extends React.Component {
  render() {
    const {
      books,
      handleOnClick,
      fetchData,
      inputValue,
      handleOnChange,
    } = this.props;

    const bookData =
      books.length !== 0 ? (
        <BookList books={books} handleOnClick={handleOnClick} />
      ) : null;

    return (
      <>
        <form className="field is-grouped" onSubmit={fetchData}>
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="title or author of the book"
              value={inputValue}
              onChange={handleOnChange}
            />
          </p>

          <input
            className="button is-info"
            type="submit"
            value="Search"
          ></input>
        </form>

        {bookData}
      </>
    );
  }
}
