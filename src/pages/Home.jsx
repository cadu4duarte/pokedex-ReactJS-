import React, { useEffect, useState } from 'react'
import { PokemonCard } from '../components/Card/card';
import "./style.css";

export function Home() {
  const [loadPage, setLoadPage] = useState(8);
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${loadPage}`);
  
  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);
    

    function createPokemonObject(results) {
      results.forEach(async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json();

        setAllPokemons(currentList => [...currentList, data]);
      });
    }

    createPokemonObject(data.results);
    
  }

  console.log(allPokemons)

  useEffect(() => {
    getAllPokemons();
  }, []);

  function loadMoreCards() {
    setLoadPage(loadPage + 8);
    getAllPokemons()
  }

  return (
    <div className="app-container">
      <div className="topContainer">
        <h1>Resultado da busca: </h1>
        <button>Novo Card</button>
      </div>
      
      <div className="pokemon-container">
      {allPokemons.map((pokemon, index) => 
          <PokemonCard 
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
            key={index}
          />  
        )}
      </div>
      <button className="load-more" onClick={() => loadMoreCards()}>Load more</button>
    </div>

  )
}
