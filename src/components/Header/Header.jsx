import React from 'react';
import "./style.css";
import lupa from "../../assets/lupa.svg"

export function Header() {
  return (
    <header>
      <section className="titleContainer">
        <h1>Pokedex</h1>
      </section>

      <section className="inputContainer">
        <div>
          <input type="text" placeholder="Faça sua busca..."/>

          <button>
            <img src={lupa} alt="lupa"/>
          </button>
        </div>
      </section>

    </header>
  )
}
