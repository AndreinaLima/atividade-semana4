/* eslint-disable react/prop-types */
import "./Cabecalho.css"

function Cabecalho() {
   function handleClick() {
     alert("Você fez seu log-in no site SEU LANCHE")
   }
  return (
    <header>
      <p>BOM LANCHE</p>
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