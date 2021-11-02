import React from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const ReviewItem = ({
  id,
  name,
  job,
  image,
  text,
  handleForward,
  handleBackward,
  handleSurprise,
}) => {
  return (
    <div className="card-box">
      <img src={image} alt={name} />
      <h3 className="name">{name}</h3>
      <p className="job">{job}</p>
      <p>{text}</p>
      <div className="icons-container">
        <BsFillArrowLeftCircleFill className="icons" onClick={handleBackward} />
        <BsFillArrowRightCircleFill className="icons" onClick={handleForward} />
      </div>
      <button onClick={handleSurprise} className="btn-surprise">
        Surprise Me
      </button>
    </div>
  );
};

export default ReviewItem;
