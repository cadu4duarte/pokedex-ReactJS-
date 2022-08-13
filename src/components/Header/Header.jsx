import React, { useContext, useState } from 'react';
import "./style.css";
import lupa from "../../assets/lupa.svg";
import { AllPokemonContext } from '../Context/AllPokemon';
import { SinglePokemonContext } from '../Context/SinglePokemon';

export function Header() {
  const [dataHeader, setDataHeader] = useState("");
  const {setAllPokemons} = useContext(AllPokemonContext);
  const {singlePokemon} = useContext(SinglePokemonContext);

  console.log(singlePokemon)

  function saveDataHeaderStorage() {
    const data = singlePokemon.filter((item) => item.name === dataHeader);
    console.log(data)
  }

  return (
    <header>
      <section className="titleContainer">
        <h1>Pokedex</h1>
      </section>

      <section className="inputContainer">
        <div>
          <input 
            type="text" 
            placeholder="Faça sua busca..."
            value={dataHeader}
            onChange={(e) => setDataHeader(e.target.value)}
            />

          <button onClick={saveDataHeaderStorage}>
            <img src={lupa} alt="lupa"/>
          </button>
        </div>
      </section>

    </header>
  )
}
