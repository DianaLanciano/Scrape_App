import React from "react";
import "./styles.css";
import { FaFileSignature } from "react-icons/fa";


const Bag = (props) => {
  return (
   
      <div className="card">
        <div className="card-header">
          <div className="profile">
            <span className="letter">Bags</span>
          </div>
          <div className="card-title-group">
            <h5 className="card-title">{props.bag.brand}</h5>
            <div className="card-date">{props.bag.title}</div>
          </div>
        </div>
        <img className="card-image" src={props.bag.image} alt="Logo" />
        <div className="card-text">
          Price before sale: {props.bag.prevPrice}
        </div>
        <div className="card-text">Sale price: {props.bag.CurrPrice}</div>
        <div className="card-like-bar">
          <button className="card-like-icon">
            <FaFileSignature />
          </button>
          <div className="like-text">
            <a href= {"https://www.mybag.com/" + props.bag.productLink}>Product link</a>
          </div>
        </div>
      </div>
   
  );
};

export default Bag;
