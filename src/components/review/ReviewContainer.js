import React, { useState, useEffect } from "react";
import reviews from "./data";
import ReviewCard from "./ReviewCard";
import Title from "./Title";

const ReviewContainer = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setAllReviews(reviews);
  }, []);

  const handleBackward = () => {
    setNumber((prevNumber) => prevNumber - 1);
    if (number <= 0) {
      setNumber(allReviews.length - 1);
    }
  };

  const handleForward = () => {
    setNumber((prevNumber) => prevNumber + 1);
    if (number >= allReviews.length - 1) {
      setNumber(0);
    }
  };

  const handleSurprise = () => {
    setNumber(Math.floor(Math.random() * allReviews.length));
  };

  return (
    <div>
      <Title />
      <ReviewCard
        allReviews={allReviews}
        number={number}
        handleBackward={handleBackward}
        handleForward={handleForward}
        handleSurprise={handleSurprise}
      />
    </div>
  );
};

export default ReviewContainer;
