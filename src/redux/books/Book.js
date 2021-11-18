/* eslint-disable linebreak-style */

const baseId =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/";
const appId = "j0OQb9mCsBBmyNW5xHF4";

const PUSH_BOOK = "bookStore/books/ADD_BOOK";
const DELETE_BOOK = "bookStore/books/REMOVE_BOOK";

export const initialState = [];

export const pushBook = (payload) => (dispatch) => {
  dispatch({ type: PUSH_BOOK, payload });
  fetch(`${baseId}/${appId}/books`, {
    method: "POST",
    mode: "no-cors",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).then((response) => response.json);
};

export const deleteBook = (id) => (dispatch) => {
  dispatch({
    type: DELETE_BOOK,
    id,
  });
  const itemId = id.item_id;
  fetch(`${baseId}/${appId}/books/${itemId}`, {
    method: "DELETE",
  }).then((response) => response.json());
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_BOOK:
      return [...state, action.payload];
    case DELETE_BOOK:
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
};

export default reducer;
