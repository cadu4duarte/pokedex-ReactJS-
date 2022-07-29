import React from 'react'

export function Header() {
  return (
    <header>
      <section>
        <h1>Pokedex</h1>
      </section>

      <section>
        <input type="text" placeholder="Faça sua busca..."/>

        <button>
          BUSCAR
        </button>
      </section>

    </header>
  )
}
