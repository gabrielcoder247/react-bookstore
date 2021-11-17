/* eslint-disable linebreak-style */
const ADD_BOOK = "bookStore/books/PUSH_BOOK";
const DELETE_BOOK = "bookStore/books/DELETE_BOOK";
const GET = "bookStore/books/GET";

const initState = [];

export const addBook = (extraBook) => ({
  type: ADD_BOOK,
  extraBook,
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  id,
});

export const getBooks = () => ({
  type: GET,
});

const booksReducer = (state = initState, action = { type: "error" }) => {
  let books;
  switch (action.type) {
    case ADD_BOOK:
      state.push(action.extraBook);
      return state;
    case DELETE_BOOK:
      books = state.filter((book) => book.id !== action.id);
      return books;
    case GET:
      return state;
    default:
      return state;
  }
};

export default booksReducer;
