import axios from "axios";

const KEY = process.env.REACT_APP_BOOK_KEY;

export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://www.goodreads.com",
  params: {
    key: KEY
  }
});
