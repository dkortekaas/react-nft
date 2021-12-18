import React from "react";
import CollectionCard from "./CollectionCard";
import "./CardList.css";

const CardList = ({ punkListData, setSelectedCard }) => {
  return (
    <div className='cardlist'>
      {punkListData.map((punk) => (
        <div key={punk.token_id} onClick={() => setSelectedCard(punk.token_id)}>
          <CollectionCard
            key={punk.token_id}
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_original_url}
          />
        </div>
      ))}
    </div>
  );
};

export default CardList;
