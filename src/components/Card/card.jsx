import React from 'react';
import "./style.css";

export const PokemonCard = ({name, image}) => {
  

  return(
    <div className="cardContainer">
      <div className="number">
        <img src={image} alt={name}/>
        <div className="detailCard">
          <h3>{name}</h3>
        </div>
      </div>

      <div className="btnBox">
        <button>Delete</button>
        <button>Edit</button>
      </div>
      

    </div>
  );
};
