import React, { useContext, useEffect, useState } from 'react'
import { PokemonCard } from '../components/Card/card';
import { SideModal } from '../components/SideModal/SideModal';
import { MainModal } from '../components/MainModal/MainModal';
import {AllPokemonContext} from "../components/Context/AllPokemon";
import "./style.css";

export function Home() {
  const {allPokemons, loadMoreCards} = useContext(AllPokemonContext);
  const [sideModalOpen, setSideModalOpen] = useState(false);
  const [mainModal, setMainModal] = useState(false);
  
  
  //side modal
  function openCloseSideModal() {
    setSideModalOpen(modal => !modal);
  }

  function openCloseMainModal() {
    setMainModal(modal => !modal);
  }
  
  return (

    <div className="app-container">
      <SideModal 
      valueSideModal={sideModalOpen} 
      setValueSideModal={ openCloseSideModal }/>

      <MainModal 
      valueMainModal={mainModal}
      setMainModal={ openCloseMainModal }/>
      
      <div className="topContainer">
        <h1>Resultado da busca: </h1>
        <button onClick={ openCloseSideModal }>Novo Card</button>
      </div>

      {allPokemons.length <= 0 ?
        <div>
          <h1>Nada encontrado</h1>
        </div>

        :
        
        (<>
        <div className="pokemon-container">
      
        {allPokemons.map((pokemon, index) => 
            <PokemonCard
            openModal={openCloseMainModal}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
            key={index} />
          )}
        </div>
  
        <div className="btnLoadBox">
          <button className="load-more" onClick={() => loadMoreCards()}>Load more</button>
        </div>
        </>)
      }
      
      
      
    </div>

  )
}
