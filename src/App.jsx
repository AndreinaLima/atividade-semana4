import Banner from "./components/Banner";
import Cabecalho from "./components/Cabecalho"
import Galeria from "./components/Galeria"
import Rodape from "./components/Rodape"

function App() {
  return (
    <>
      <Cabecalho />
      <main>
        <Banner />
        <Galeria />
      </main>
      <footer>
        <Rodape />
      </footer>
    </>
  )
}

export default App;