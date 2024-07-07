import "./Cabecalho.css"
import logo from "../../public/logo.png"

function Cabecalho() {
   function handleClick() {
     alert("Você fez seu log-in no site BOM LANCHE")
   }
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Imagem da logo" />
        <p>BOM LANCHE</p>
      </div>

      <nav className="nav-links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Produtos</a>
          </li>
        </ul>
        <button onClick={handleClick}>Entrar</button>
        <span className="material-symbols-outlined">shopping_cart</span>
      </nav>
    </header>
  )
}

export default Cabecalho;