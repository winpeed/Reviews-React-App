import React from "react";
import ReviewItem from "./ReviewItem";

const ReviewCard = ({
  allReviews,
  handleBackward,
  handleForward,
  number,
  handleSurprise,
}) => {
  return (
    <div>
      <ReviewItem
        {...allReviews[number]}
        handleForward={handleForward}
        handleBackward={handleBackward}
        handleSurprise={handleSurprise}
      />
      {/* {allReviews.map((review) => {
        return <ReviewItem {...review} key={allReviews.id} />;
      })} */}
    </div>
  );
};

export default ReviewCard;
