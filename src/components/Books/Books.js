import React from "react";
import BookM, { deleteBook } from "../../redux/books/Book";
import Book from "./Book";

const Books = () => {
  const normal = BookM("G");
  return (
    <ul className="booklist">
      {" "}
      {normal.books.map((book) => {
        const { id, title, author, genre } = book;
        return (
          <li key={book.id}>
            <Book
              id={id}
              title={title}
              genre={genre}
              author={author}
              onClick={deleteBook}
            />{" "}
          </li>
        );
      })}{" "}
    </ul>
  );
};

Books.displayName = "Books";

export default Books;
