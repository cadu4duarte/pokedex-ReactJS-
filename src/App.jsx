import {Home} from "./pages/Home";
import {Header} from "./components/Header/Header";
import Modal from "react-modal";
import {AllPokemonProvider} from "./components/Context/AllPokemon";
import {SinglePokemonProvider} from "./components/Context/SinglePokemon";

Modal.setAppElement("#root");

function App() {

  return (
    <SinglePokemonProvider>
      <AllPokemonProvider>
        <div className="App">
          <Header/>
          <Home/>
        </div>
      </AllPokemonProvider>
    </SinglePokemonProvider>

    
  )
}

export default App
