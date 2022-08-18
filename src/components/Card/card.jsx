import React from 'react';
import "./style.css";
import lixeira from "../../assets/lixeira.svg";
import edit from "../../assets/edit.svg";

export const PokemonCard = ({name, image, openModal}) => {

  return(
    <div className="cardContainer">
      <div className="number">
        <img src={image} alt={name}/>
        <div className="detailCard">
          <h3>{name}</h3>
        </div>
      </div>

      <div className="btnBox">
        <button onClick={openModal}>
          <img src={lixeira}/>
          Deletar
        </button>
        <button>
          <img src={edit}/>
          Editar
        </button>
      </div>
      

    </div>
  );
};
