import React from "react";
import "./cards.css";

const card = (props) => {
  const imgid = "props.imgid";
  return (
    <div className="container">
      <div className="card">
        <img
          className="card-img-top"
          src={props.imgid}
          alt="Card image cap"
          width="200px"
          height="200px"
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          {/* <a href="#" className="btn btn-primary">Learn More</a> */}
        </div>
      </div>
    </div>
  );
};

export default card;
