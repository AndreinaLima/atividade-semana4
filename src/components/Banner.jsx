import "./Banner.css"
import banner from "../assets/banner.png"

function Banner() {
  return (
    <section className="banner">
        <img src={banner} alt="Imagem de um hamburguer" />
    </section>
  )
}

export default Banner;