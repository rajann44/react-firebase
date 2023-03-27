import React, { useState } from "react";
import ReactStars from "react-stars";
import { reviewsTable, fireDB } from "../database/firebase";
import { addDoc, doc, updateDoc } from "firebase/firestore";
import { TailSpin } from "react-loader-spinner";
import Swal from "sweetalert2";

const Reviews = ({ id, currentRating, usersRated }) => {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reviewMessage, setReviewMessage] = useState("");

  const sendReview = async () => {
    setLoading(true);
    try {
      await addDoc(reviewsTable, {
        movieid: id,
        name: "Rajan Chaudhary",
        message: reviewMessage,
        rating: rating,
        timestamp: new Date().getTime(),
      });

      const movieRef = doc(fireDB, "movies", id);
      await updateDoc(movieRef, {
        rating: currentRating + rating,
        rated: usersRated + 1,
      });

      Swal.fire({
        title: "Review Uploaded",
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        title: error.message,
        text: error,
        icon: "error",
        timer: 3000,
        showConfirmButton: false,
      });
    }
    setReviewMessage("");
    setRating(0);
    setLoading(false);
  };

  return (
    <div className="mt-4 w-full border-t-2">
      <ReactStars
        size={30}
        half={true}
        edit={true}
        value={rating}
        onChange={(e) => setRating(e)}
      />
      <input
        placeholder="Share your review..."
        className="w-full p-2 bg-slate-900"
        value={reviewMessage}
        onChange={(e) => setReviewMessage(e.target.value)}
      ></input>
      <button
        onClick={sendReview}
        className="bg-green-600 flex justify-center p-2 w-full"
      >
        {loading ? <TailSpin height={20} color="white"></TailSpin> : "Share"}
      </button>
    </div>
  );
};

export default Reviews;
