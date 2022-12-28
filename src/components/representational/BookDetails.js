import React from "react";

const BookDetails = (props) => {
  console.log(props.book);
  if (props.book === null) return <div></div>;
  return (
    <div>
      <h1>{props.book.bookName}</h1>
      <h3>{props.book.writer}</h3>
      <h3>{props.book.description}</h3>
    </div>
  );
};

export default BookDetails;
