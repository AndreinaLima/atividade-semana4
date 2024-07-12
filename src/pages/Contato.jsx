import { Button } from "react-bootstrap"
import { useForm } from "react-hook-form"

function Contato() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  function salvarContato(data) {
    console.log("Salvar contato")
    console.log(data)
  }

  return (
    <main>
      <form className="form-section" onSubmit={handleSubmit(salvarContato)}>
        <h1 className="mt-5"> Fale conosco</h1>
        <hr />
        <div className="mb-2">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            className="form-control"
            {...register("nome", {
              required: "O nome é obrigatório!",
              maxLength: { value: 150, message: "Máximo de caractere: 150" },
            })}
          />
          {errors.nome && (
            <small className="invalid">{errors.nome.message}</small>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="form-control"
            {...register("email", { required: "O email é obrigatório!" })}
          />
          {errors.email && (
            <small className="invalid">{errors.email.message}</small>
          )}
        </div>
        <div className="mt-2">
          <label htmlFor="feedback">Feedback</label>
          <textarea
            id="feedback"
            className="form-control"
            {...register("feedback", {
              required: "O feedback é obrigatório",
            })}
          ></textarea>
          {errors.feedback && (
            <small className="invalid">{errors.feedback.message}</small>
          )}
        </div>
        <div className="mt-4">
          <label htmlFor="motivo">Motivo do contato</label>
          <select id="motivo" className="form-select" {...register("motivo")}>
            <option value="Produtos">Produtos</option>
            <option value="Entrega">Entrega</option>
            <option value="Servicos">Serviços</option>
            <option value="Atendimento">Atendimento</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <Button className=" w-100 mt-3 mb-5" variant="warning" type="submit">
          Enviar
        </Button>
      </form>
    </main>
  )
}

export default Contato
