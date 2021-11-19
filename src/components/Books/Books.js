// // import React from "react";
// // import { useSelector } from "react-redux";
// // import Book from "Book";

// // const Books = () => {
// //     const bookQuantity = useSelector((state) => state.books.length);
// //     const books = useSelector((state) => state.books);
// //     return ( <
// //         div >
// //         <
// //         h2 > Number of books { bookQuantity } < /h2>{" "} <
// //         ul className = "booklist" > { " " } {
// //             books.map((book) => {
// //                 const { id, title, author, genre } = book;
// //                 return ( <
// //                     li key = { book.id } >
// //                     <
// //                     Book id = { id }
// //                     title = { title }
// //                     genre = { genre }
// //                     author = { author }
// //                     />{" "} < /
// //                     li >
// //                 );
// //             })
// //         } { " " } <
// //         /ul>{" "} < /
// //         div >
// //     );
// // };

// // Books.displayName = "Books";

// // export default Books;

// import { React, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getBook } from "../../redux/books/Book";
// import Books from "./Books-Page";
// import InputBooks from "./Books-Input";

// const AllBooks = () => {
//   const myBooks = useSelector((state) => state.booksReducer);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getBook());
//   }, []);

//   if (myBooks.length) {
//     return (
//       <section>
//         <Books books={myBooks} /> <InputBooks />
//       </section>
//     );
//   }
//   return (
//     <>
//       <InputBooks />
//     </>
//   );
// };

// export default AllBooks;
