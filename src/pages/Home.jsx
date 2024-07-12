import "./Home.css"
import Card from "../components/Card"
import burguer from "../assets/burguer.png"
import Banner from "../components/Banner"

const produtos = [
  {
    cod: 1,
    imagem: burguer,
    nome: "X-Burger",
    descricao:
      "Pão, carne caseira 90g, queijo cheddar, tomate, alface, e molho especial da casa.",
    preco: 22,
    desconto: 5,
    carrinho: "Adicionar ao carrinho",
  },
  {
    cod: 2,
    imagem: burguer,
    nome: "X-Bacon",
    descricao:
      "Pão, carne caseira 90g, queijo cheddar, bacon, tomate, alface, e molho especial da casa.",
    preco: 30,
    desconto: 10,
    carrinho: "Adicionar ao carrinho",
  },
  {
    cod: 3,
    imagem: burguer,
    nome: "X-Calabresa",
    descricao:
      "Pão, carne caseira 90g, calabresa, queijo cheddar, tomate, alface, e molho especial da casa.",
    preco: 35,
    desconto: 15,
    carrinho: "Adicionar ao carrinho",
  },
  {
    cod: 4,
    imagem: burguer,
    nome: "X-Tudo",
    descricao:
      "Pão, carne caseira 90g, calabresa, bacon, queijo cheddar, tomate, alface, e molho especial da casa.",
    preco: 40,
    desconto: 10,
    carrinho: "Adicionar ao carrinho",
  },
]

function Home() {
  const cardProdutos = produtos.map((produto) => {
    return (
      <Card
        key={produto.cod}
        imagem={produto.imagem}
        nome={produto.nome}
        descricao={produto.descricao}
        desconto={produto.desconto}
        preco={produto.preco}
        carrinho={produto.carrinho}
      />
    )
  })
  return (
    <>
    <Banner />
      <h2>Produtos</h2>
      <section className="gallery">
        {cardProdutos}
      </section>
    </>
  )
}

export default Home;
