/* eslint-disable linebreak-style */

export const initialState = [];

export const pushBook = (payload) => ({
  type: "PUSH_BOOK",
  payload,
});
export const deleteBook = (id) => ({
  type: "DELETE_BOOK",
  id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PUSH_BOOK":
      return [...state, action.payload];
    case "DELETE_BOOK":
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
};

export default reducer;
