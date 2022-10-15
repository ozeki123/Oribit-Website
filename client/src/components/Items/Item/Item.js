import React, { useState }from 'react'
import { Link, Navigate } from 'react-router-dom';
import "./Item.scss";
import { ReactComponent as StarIcon } from "../../../assets/icons/star-svgrepo-com.svg";

function Item({item}){
  const [toPage, setToPage] = useState(false);

  return (
    <div className="list-item">
      <Link to={`/spaces/${item._id}`}>
        <div className="item-title">
          <p className="item-name">{item.title}</p>
          <p className="item-rating">
            <span>
              <StarIcon/>
            </span>
            {item.rating}
          </p>
        </div>
      </Link>
      <p className="item-location">{item.location}</p>
    </div>
  )
}

export default Item;