import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cabecalho from "./components/Cabecalho"
import Home from "./pages/Home"
import Contato from "./pages/Contato"
import Cadastro from "./pages/Cadastro"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Rodape from "./components/Rodape"

function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </>
  )
}

export default App
