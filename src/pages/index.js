import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import NavSite from '../components/navigator'
import LandHead from "../components/landing-head"
import '../styles/global.css'
// styles
const pageStyles = {
  color: "#232129",
  padding: 200,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  opacity:0.9,
  paddingTop:0
}
const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const descriptionStyle = {
  color: "#000000",
  fontSize: 20,
  marginTop: 50,
  marginBottom: 50,
  lineHeight: 1.25,
}
const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}
const subtittleStyle={
  textAlign:"center"
}
// data

// markup
const IndexPage = () => {
  return (
    <div style={{ marginTop: 0 }}>
      <NavSite></NavSite>
      <LandHead tittleH1="Deforestacion Puerto Nuevo" backImg="'https://imgs.mongabay.com/wp-content/uploads/sites/25/2019/11/11141023/Cultivos-de-coca-en-Puerto-Nuevo-Ucayali-Yvette-Sierra-Praeli.jpg'"></LandHead>
      <div style={pageStyles}>
        <article style={descriptionStyle}>
            En 2013 el diario The New York Times realizó un reportaje en torno de la problemática de la tala ilegal en Ucayali (Neuman y Zarate 2013). De acuerdo con este reportaje el transporte de madera con documentos adulterados sería una práctica ampliamente difundida en la región. Dicha adulteración no solo estaría referida a un problema de subreporte de las unidades transportadas sino que además especies amenazadas como la caoba estarían siendo comercializadas a través certificados en los que figuran como otras especies de menor valor comercial. Todo ello se daría en medio de un escenario de aparente pasividad de las autoridades locales, lo que corrobora la hipótesis de la existencia de colusión entre los funcionarios públicos y los empresarios madereros.
        </article>
        <article style={descriptionStyle}>
          <h2 className="h2" style={subtittleStyle}>Perfil de Cliente</h2>
          <p>
            El territorio de la comunidad nativa de Puerto Nuevo, en Ucayali, es un lugar con difícil acceso debido a esto no cuentan con servicios básicos ni con el apoyo del Estado, estando siempre en constante lucha pues a menudo sus tierras son invadidas por taladores ilegales (madereros) además de la minería ilegal, pero en  estos últimos años su mayor lucha es el narcotráfico (la siembra de hoja de coca), siendo estos mismos los que luchan para proteger sus ya que no reciben ayuda por parte del Estado.   
          </p>
          <img src="https://wayka.pe/wp-content/uploads/2021/04/260421_FOTO_UCAYALI.png"></img>
        </article>
      </div>
    </div>
  )
}

export default IndexPage
