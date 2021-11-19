import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { fetchBooks, deleteBooksApi, ApiUrl } from "../redux/books/Book";

export default function Books() {
  const dispatch = useDispatch();

  const getItems = () => {
    dispatch(fetchBooks());
  };

  useEffect(() => {
    getItems();
  }, []);

  const submitBookToStore = (e) => {
    e.preventDefault();
    fetch(ApiUrl, {
      method: "post",
      body: JSON.stringify({
        item_id: uuidv4(),

        title: document.querySelector(".title").value,
        category: document.querySelector(".author").value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.text())
      .then((json) => {
        if (json) {
          getItems();
        }
      });

    document.querySelector(".title").value = "";
    document.querySelector(".author").value = "";
  };

  const removeBookFromStore = (e) => {
    dispatch(deleteBooksApi(e.target.id));
  };

  const books = useSelector((state) => state.booksReducer.books);
  const listItems = Object.keys(books).map((book) => (
    <div key={book}>
      <p> {books[book][0].genre} </p> <p> {books[book][0].title} </p>{" "}
      <p> {books[book][0].category} </p>{" "}
      <button type="button" id={book} onClick={removeBookFromStore}>
        {" "}
        Remove Book{" "}
      </button>{" "}
    </div>
  ));

  return (
    <div>
      <div className="book-list"> {listItems} </div> <br />
      <form>
        <h2> ADD NEW BOOK </h2> <br />
        <input placeholder="Book title" className="title" />
        <input placeholder="Author" className="author" />
        <button type="submit" onClick={submitBookToStore}>
          {" "}
          Add Book{" "}
        </button>{" "}
      </form>{" "}
    </div>
  );
}
