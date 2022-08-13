import React from 'react'
import { useState, createContext, useEffect } from 'react';

export const SinglePokemonContext = createContext({});

export function SinglePokemonProvider({children}) {
  const [singlePokemon, setSinglePokemon] = useState([]);
  const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit=240");

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);
    

    function createPokemonObject(results) {
      results.forEach(async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json();

        setSinglePokemon(currentList => [...currentList, data]);
      });
    }

    createPokemonObject(data.results);
    
  }

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <SinglePokemonContext.Provider value={singlePokemon}>
      {children}
    </SinglePokemonContext.Provider>
  )
}
