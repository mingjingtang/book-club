import axios from "axios";

const GOODREADSURL =
  "https://cors-anywhere.herokuapp.com/https://www.goodreads.com";
const APIKey = process.env.REACT_APP_BOOK_KEY;

const books = axios.create({
  baseURL: `${GOODREADSURL}`,
});

export const bookGetter = async (input) => {
  try {
    const resp = await books.get(`search/index.xml?key=${APIKey}&q=${input}`);
    return resp;
  } catch (e) {
    return { data: "FAILED" };
  }
};
