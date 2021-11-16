/* eslint-disable linebreak-style */
const ADD_BOOK = "bookStore/books/ADD_BOOK";
const DELETE_BOOK = "bookStore/books/DELETE_BOOK";
const GET_BOOK = "bookStore/books/GET_BOOK";

export const initState = {
  books: [
    {
      id: 0,
      genre: "Action",
      title: "The Hunger Games",
      author: "Suzanne Collins",
    },
    {
      id: 1,
      genre: "Science Fiction",
      title: "Dune",
      author: "Frank Herbert",
    },
    {
      id: 2,
      genre: "Economy",
      title: "Capital in the Twenty-First Century",
      author: "Suzanne Collins",
    },
  ],
};

export const addBook = (extraBook) => ({
  type: ADD_BOOK,
  extraBook,
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  id,
});

export const getBooks = () => ({
  type: GET_BOOK,
});

const reducer = (action = { type: "error" }, state = initState) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state.books, action.extraBook];
    case DELETE_BOOK:
      return state.books.filter((book) => book.id !== action.id);
    case GET_BOOK:
      return state;
    default:
      return state;
  }
};

export default reducer;
