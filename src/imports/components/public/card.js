import React from "react";

function Card(props) {
  return (
    <div className="ui card " style={{ marginRight: 32, width: "100%" }}>
      <div className={props.image}>
        <div className="imageStyle">
          <img src={props.img} width="100%" height="100%" />
        </div>
      </div>
      <div className="content">
        <a className="header">{props.title}</a>
        {/* <div class="meta">
          <span className="date">Joined in 2013</span>
        </div> */}
        {!props.text ? (
          <div className="description">$ {props.text}</div>
        ) : (
          undefined
        )}
      </div>
      {!props.fee ? (
        <div className="extra content contents">
          <a className="greyBack">{props.preparation} min</a>
          <a
            className="greyBack"
            style={{ display: "flex", alignItems: "center" }}
          >
            {props.rate}

            <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/92367108b11b8ee48b6f29cb3fef2d4d.svg" />
          </a>
          <a className="greyBack">{props.fee} delivery fee</a>
        </div>
      ) : (
        <div>{props.cards}</div>
      )}
    </div>
  );
}

export default Card;
