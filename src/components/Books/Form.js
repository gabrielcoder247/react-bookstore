import { useDispatch } from "react-redux";
import { pushBook } from "../../redux/books/Book";

const uuid = require("uuid");

function Books() {
  const dispatch = useDispatch();

  return (
    <>
      <h1> Book List </h1>{" "}
      <form
        id="myForm"
        onSubmit={(e) => {
          e.preventDefault();
          const newBook = {
            id: uuid.v4(),
            title: e.target.title.value,
            author: e.target.author.value,
            year: e.target.year.value,
          };
          dispatch(pushBook(newBook));
          document.getElementById("myForm").reset();
        }}
      >
        <label htmlFor="title">
          Title:
          <input type="text" name="title" required />
        </label>{" "}
        <label htmlFor="author">
          Author:
          <input type="text" name="author" required />
        </label>{" "}
        <label htmlFor="year">
          Year:
          <input type="text" name="year" required />
        </label>{" "}
        <input type="submit" value="Add Book" />
      </form>{" "}
    </>
  );
}

export default Books;
