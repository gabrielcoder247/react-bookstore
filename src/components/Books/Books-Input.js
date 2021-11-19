// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { v4 as uuidv4 } from "uuid";
// import { postBook } from "../../redux/books/Book";

// const bookCategories = [
//   "Choose a category",
//   "Action",
//   "Adventure",
//   "Drama",
//   "Mystery",
//   "Suspense",
//   "Romance",
//   "Comedy",
// ];

// const InputBooks = () => {
//   const dispatch = useDispatch();
//   const [title, setTitle] = useState("");

//   const [category, setCategory] = useState(bookCategories[0]);

//   const onChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const book = {
//     item_id: uuidv4(),
//     title,
//     category,
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (title && category) {
//       dispatch(postBook(book));
//       setTitle("");
//       setCategory(bookCategories[0]);
//       e.target.reset();
//     }
//   };

//   return (
//     <section>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="title"
//           value={title}
//           onChange={onChange}
//           placeholder="Add book title..."
//         />
//         <select
//           name="category"
//           onChange={(category) => setCategory(category.target.value)}
//         >
//           {" "}
//           {bookCategories.map((category) => (
//             <option key={category} value={category}>
//               {" "}
//               {category}{" "}
//             </option>
//           ))}{" "}
//         </select>{" "}
//         <button type="submit"> Add Books </button>{" "}
//       </form>{" "}
//     </section>
//   );
// };

// export default InputBooks;
