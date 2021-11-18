import { useDispatch } from "react-redux";
import { pushBook } from "../../redux/books/Book";

const uuid = require("uuid");

// const baseId =
//   "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps";

function Books() {
  const dispatch = useDispatch();

  // const generateId = async () => {
  //   const response = await fetch(`${baseId}/`, {
  //     method: "POST",
  //   });
  //   const json = await response.text();
  //   console.log(json);
  // };

  // generateId();
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
            genre: e.target.genre.value,
          };
          dispatch(pushBook(newBook));
          document.getElementById("myForm").reset();
        }}
      >
        <label htmlFor="genre">
          Genre:
          <input type="text" name="genre" required />
        </label>{" "}
        <label htmlFor="title">
          Title:
          <input type="text" name="title" required />
        </label>{" "}
        <label htmlFor="author">
          Author:
          <input type="text" name="author" required />
        </label>{" "}
        <input type="submit" value="Add Book" />
      </form>{" "}
    </>
  );
}

export default Books;
