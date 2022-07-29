import React, { useEffect, useState } from 'react'

export function Home() {
  const [loadPage, setLoadPage] = useState(8);
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${loadPage}`);

  async function getPokemons() {
    const response = await fetch(loadMore);
    const data = await response.json();
    setLoadMore(data.next);

    function loadPokemons(results) {
      results.forEach(async (pokemon) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await response.json();

        setAllPokemons((currentList) => [...currentList, data]);
      })
    }
    loadPokemons(data.results);
    console.log(`function console ${data.results}`)
  }

  console.log(allPokemons);

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="app-container">
      <h1>Pokemons list</h1>
      <div>
        {allPokemons.map((pokemon) => {
          <div className="pokemonBox">
            <img src={pokemon.sprites.other.dream_world.front_default}/>
            <p>{pokemon.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}
