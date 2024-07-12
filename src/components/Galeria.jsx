import "./Galeria.css"
import Card from "./Card";
import burguer from "../assets/burguer.png"

const produtos = [
  {
    cod: 1,
    imagem: burguer,
    nome: "X-burger",
    descricao:
      "Pão, carne caseira 90g, queijo cheddar, tomate, alface, e molho especial da casa.",
    preco: 22, desconto: 5,
    carrinho: "Adicionar ao carrinho",
  },
  {
    cod: 2,
    imagem: burguer,
    nome: "X-bacon",
    descricao:
      "Pão, carne caseira 90g, queijo cheddar, bacon, tomate, alface, e molho especial da casa.",
    preco: 30, desconto: 10,
    carrinho: "Adicionar ao carrinho",
  },
  {
    cod: 3,
    imagem: burguer,
    nome: "X-calabresa",
    descricao:
      "Pão, carne caseira 90g, calabresa, queijo cheddar, tomate, alface, e molho especial da casa.",
    preco: 35, desconto: 15,
    carrinho: "Adicionar ao carrinho",
  },
  {
    cod: 4,
    imagem: burguer,
    nome: "X-tudo",
    descricao:
      "Pão, carne caseira 90g, calabresa, bacon, queijo cheddar, tomate, alface, e molho especial da casa.",
    preco: 40, desconto: 10,
    carrinho: "Adicionar ao carrinho",
  },
]

function Galeria() {
  const cardProdutos = produtos.map((produto) => {
    return <Card key={produto.cod} imagem= {produto.imagem} nome={produto.nome} descricao={produto.descricao} desconto={produto.desconto} preco={produto.preco} carrinho={produto.carrinho}/>
  })
  return (
    <>
      <h2>Produtos</h2>
      <section className="gallery">
        {/* <Card
        imagem={burguer}
        nome="X-burger"
        descricao="Pão, carne caseira 90g, queijo cheddar, tomate, alface, e molho especial da casa."
        preco={`R$${(22.0).toFixed(2)}`}
        carrinho="Adicionar ao carrinho"
      />
      <Card
        imagem={burguer}
        nome="X-bacon"
        descricao="Pão, carne caseira 90g, queijo cheddar, bacon, tomate, alface, e molho especial da casa."
        preco={`R$${(30.0).toFixed(2)}`}
        carrinho="Adicionar ao carrinho"
      />
      <Card
        imagem={burguer}
        nome="X-tudo"
        descricao="Pão, carne caseira 90g, calabresa, bacon, queijo cheddar, tomate, alface, e molho especial da casa."
        preco={`R$${(40.0).toFixed(2)}`}
        carrinho="Adicionar ao carrinho"
      />
      <Card
        imagem={burguer}
        nome="X-calabresa"
        descricao="Pão, carne caseira 90g, calabresa, queijo cheddar, tomate, alface, e molho especial da casa."
        preco={`R$${(35.0).toFixed(2)}`}
        carrinho="Adicionar ao carrinho"
      /> */}
        {cardProdutos}
      </section>
    </>
  )
}

export default Galeria;