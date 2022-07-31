import React from 'react';
import "./style.css";

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
            BUSCAR
          </button>
        </div>
      </section>

    </header>
  )
}
