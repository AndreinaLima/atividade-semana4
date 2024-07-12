import { Alert, Button } from "react-bootstrap"
import { useForm } from "react-hook-form"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  function entrar(data) {
    console.log("Login")
    console.log(data)
  }

  return (
    <main>
      <form
        className="form-section custom-form mt-5"
        onSubmit={handleSubmit(entrar)}
      >
        <h1>Faça o seu Login</h1>
        <hr />
        <div className="mb-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu email:"
            className="form-control"
            {...register("email", { required: "O email é obrigatório" })}
          />
          {errors.email && (
            <small className="invalid">{errors.email.message}</small>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            placeholder="Digite sua senha:"
            className="form-control"
            {...register("senha", {
              required: "A senha é obrigatória",
              minLength: { value: 6, message: "Mínimo de 6 caracteres" },
            })}
          />
          {errors.senha && (
            <small className="invalid">{errors.senha.message}</small>
          )}
        </div>
        <Button variant="dark" className="mt-2 mb-1 w-100" type="submit">
          Entrar
        </Button>
        <Button variant="warning" className="mb-3 w-100" type="submit">
          Entrar com o google
        </Button>
        <div className="icon-container">
          <a href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="logo-whatsapp"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </form>
      <Alert className="mt-5" variant="warning">
        Atenção! É importante que você faça login para conseguir adicionar itens
        ao carrinho e fazer sua compra.
      </Alert>
    </main>
  )
}

export default Login
