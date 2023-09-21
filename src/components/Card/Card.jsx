import React from "react";

import "./Card.scss";
import starIcon from "../../assets/png/star.png";
import carImage from "../../assets/jpeg/image1.png";

export default function Card() {
  return (
    <div className="card">
      <img src={carImage} alt="" className="cardImg" />
      <p className="cardRating">
        <img src={starIcon} alt="" className="starIcon" />
        <span className="cardRatingScore">5.0</span>
        <span className="cardCountryReviews">(30) . USA</span>
      </p>

      <p className="cardTitle">Life lessons with Katie Zaferes</p>
      <p className="cardPricing">
        <b>From $136</b> / person
      </p>
      <span className="cardBadge">SOLD OUT</span>
    </div>
  );
}
