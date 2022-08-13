import React from 'react'
import { useState, createContext, useEffect } from 'react';

export const AllPokemonContext = createContext({});

export function AllPokemonProvider({children}) {
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


  useEffect(() => {
    getAllPokemons();
  }, []);

  function loadMoreCards() {
    setLoadPage(loadPage + 8);
    getAllPokemons()
  }

  return (
    <AllPokemonContext.Provider value={{allPokemons, setAllPokemons, loadMoreCards}}>
      {children}
    </AllPokemonContext.Provider>
  )
}
