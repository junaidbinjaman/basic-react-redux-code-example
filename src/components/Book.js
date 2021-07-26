import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyBook } from "../redux";

const Book = () => {
  const totalBook = useSelector((state) => state.book.numOfBook);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{"<<== Books are Coming from Hook state ==>>"}</p>
      <h2>Num Of Book - {totalBook}</h2>
      <button onClick={() => dispatch(buyBook())}>Buy a Book</button>
    </div>
  );
};

export default Book;
