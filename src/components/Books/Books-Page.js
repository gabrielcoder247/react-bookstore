// import { React, useEffect } from "react";
// import PropTypes from "prop-types";
// import { useDispatch } from "react-redux";
// import { v4 as uuidv4 } from "uuid";
// import { deleteBook } from "../../redux/books/Book";
// // Delete function
// const Books = ({ books }) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(deleteBook());
//   }, []);

//   return (
//     <div>
//       <ul className="books">
//         {" "}
//         {books.map((book) => (
//           <li key={uuidv4()}>
//             <span className="first-span"> {book.title} </span>{" "}
//             <span> {book.category} </span>{" "}
//             <button
//               className="remove"
//               onClick={() => dispatch(deleteBook(book.id))}
//               type="button"
//             >
//               Remove books{" "}
//             </button>{" "}
//           </li>
//         ))}{" "}
//       </ul>{" "}
//     </div>
//   );
// };

// Books.propTypes = {
//   books: PropTypes.instanceOf(Array).isRequired,
// };

// export default Books;
