// import React from "react";
// import PropTypes from "prop-types";
// import { useDispatch } from "react-redux";
// import { deleteBook } from "../../redux/books/Book";

// const Book = (props) => {
//     const dispatch = useDispatch();
//     const forClick = (id) => {
//         dispatch(deleteBook(id));
//     };
//     const { genre, title, author, id } = props;
//     return ( <
//         div className = "square" >
//         <
//         p className = "genre" > { genre } < /p> <h2 className="title"> {title} </h
//         2 > { " " } <
//         p className = "author" > { author } < /p>{" "} <
//         button type = "button"
//         onClick = {
//             () => forClick(id) } > { " " }
//         delete { " " } <
//         /button>{" "} <
//         /div>
//     );
// };

// Book.propTypes = {
//     id: PropTypes.number,
//     genre: PropTypes.string,
//     title: PropTypes.string,
//     author: PropTypes.string,
// };

// Book.displayName = "Book";

// Book.defaultProps = {
//     id: -1,
//     title: "A Python Hello World",
//     genre: "Education",
//     author: "Gabriel",
// };

// export default Book;
