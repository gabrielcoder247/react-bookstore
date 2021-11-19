import React from "react";
import { Routes, Route } from "react-router-dom";
import Books from "./components/books";
import Categories from "./components/categories";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />{" "}
        <Route path="/categories" element={<Categories />} />{" "}
      </Routes>{" "}
    </div>
  );
}

export default App;
