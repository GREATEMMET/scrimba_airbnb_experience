import React from "react";

import "./Card.scss";
import starIcon from "../../assets/png/star.png";

export default function Card(props) {
  return (
    <a href="#/">
      <div className="card">
        <img
          src={`../../../public/images/${props.img}`}
          alt=""
          className="cardImg"
        />
        <p className="cardRating">
          <img src={starIcon} alt="" className="starIcon" />
          <span className="cardRatingScore">{props.rating}</span>
          <span className="cardCountLocation">
            ({props.reviewCount}) . {props.location}
          </span>
        </p>

        <p className="cardTitle">{props.title}</p>
        <p className="cardPricing">
          <b>From ${props.price}</b> / person
        </p>
        <span className="cardBadge">
          {props.badge === 0
            ? "SOLD OUT"
            : `${props.badge} ${props.badge === 1 ? "Spot" : "Spots"}`}
        </span>
      </div>
    </a>
  );
}
