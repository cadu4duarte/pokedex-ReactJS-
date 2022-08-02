import {Home} from "./pages/Home";
import {Header} from "./components/Header/Header";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {

  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  )
}

export default App
