import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../../utility/addToDB";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// Sweet Alert 2
const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const { bookName, image } = singleBook;

  const handleMarkAsRead = (id) => {
    // Store with id
    // where to store
    // array of collection
    // if book already exist the show a alert
    // if book not exist then push in the collection or array

    // Sweet Alert 2 part
    MySwal.fire({
      title: "Mark Done",
      icon: "success",
      draggable: true,
    });
    //add to store DB part
    addToStoredDB(id);
  };

  
  return (
    <div className="w-2/3 mx-auto">
      <img src={image} alt="" />
      <h5>{bookName}</h5>
      <button
        onClick={() => handleMarkAsRead(id)}
        className="btn btn-accent m-2"
      >
        Mark as Read
      </button>
      <button className="btn btn-info m-2">Add To Wishlist</button>
    </div>
  );
};

export default BookDetails;
