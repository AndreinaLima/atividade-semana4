import { Container, Image } from "react-bootstrap"
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <main>
      <Container className="mt-5 mb-5 text-center">
        <Image
          src="https://i.gifer.com/jQ.gif"
          fluid
          style={{
            border: "8px solid #ccc",
            borderRadius: "8px",
            margin: "0 auto",
          }}
        />
        <h1 className="mt-5 mb-5">Página não encontrada. Error 404.</h1>
        <Link className="nav-link" to="/">
          Vá para a página inicial
        </Link>
      </Container>
    </main>
  )
}

export default NotFound
