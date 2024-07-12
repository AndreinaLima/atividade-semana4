import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Cabecalho.css"
import logo from "../../public/logo.png"

function Cabecalho() {
  return (
    <header>
      <Navbar variant="dark" expand="md">
        <Container fluid className="text-center">
          <Link to="/">
            <img src={logo} alt="Imagem da logo" className="logo" />
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-link" to="/cadastro">
                Cadastro
              </Link>
              <Link className="nav-link" to="/contato">
                Contato
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Cabecalho
