/* eslint-disable react/prop-types */
import "./Card.css"

function Card(props) {
   const valorDesconto = props.preco - props.preco * (props.desconto / 100)
  return (
    <article className="card">
      <img src={props.imagem} alt="Imagem de um hambúrguer" />
      <h3>{props.nome}</h3>
      <p>{props.descricao}</p>
      {props.desconto > 0 && (
        <p className="grifado">R${props.preco.toFixed(2)}</p>
      )}
      {props.desconto > 0 ? (
        <h4>R${valorDesconto.toFixed(2)}</h4>
      ) : (
        <h4>R${props.preco.toFixed(2)}</h4>
      )}
      <button>
        <span className="material-symbols-outlined">shopping_cart</span>
        {props.carrinho}
      </button>
    </article>
  )
}

export default Card;