import React from "react";
import "./Book.css";
import img from "./dog.jpg";

const Book = ({ title, author, price, type }) => {
  return (
    <div className="box">
      <h3>이번주 베스트셀러</h3>
      <img src={img} alt="책" width="100px" />
      <div>{title}</div>
      <div>저자: {author}</div>
      <div>판매가: {price}</div>
      <div>구분: {type}</div>
    </div>
  );
};

export default Book;
