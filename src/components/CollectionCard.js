import React from "react";
import wethImage from "../assets/weth.png";
import "./CollectionCard.css";

function CollectionCard({ id, name, traits, image }) {
  return (
    <div className='card'>
      <img src={image} alt='' className='card__image' />
      <div className='card__details'>
        <div className='card__name'>
          {name}
          <div className='id'> .#{id}</div>
        </div>
        <div className='card__price'>
          <img src={wethImage} alt='' className='weth' />
          <div className='price'>{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
