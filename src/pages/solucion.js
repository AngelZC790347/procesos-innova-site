import React from "react";
import LandHead from "../components/landing-head";
import NaviSite from "../components/navigator";
import 'bootstrap/dist/css/bootstrap.min.css'
import BlackBox from "../components/black-box";
import '../styles/global.css'
import '../images/esquema.png'
import '../images/matriz-morfo.png'
const solMainPage = () => {
    return (
        <div style={{marginBottom:50}}>
            <NaviSite></NaviSite>
            <LandHead tittleH1="Drones" backImg="https://www5.djicdn.com/cms/uploads/fced25c09996cf03c3383eac057ebc45@640*640.jpg"></LandHead>
            <article style={{padding:"50px 50px"}}>
                Dronecoria V.05: Es un proyecto creado por una empresa española, la cual busca desarrollar una tecnología forestal actualizada al siglo XXI, que permita a entidades y empresas poder realizar reforestaciones de bajo coste, alto valor y construir una comunidad en torno a ellas para formar una nueva economía de la restauración ecológica. Además, desarrolla  herramientas y conocimiento biotecnológico de código libre, con el fin de brindar soluciones tecnológicas para siembras directas forestales, desde un drone que carga 10 kg de semillas, hasta una maquina peletizadora de semillas. En esa misma línea,  brinda una investigación de ciencia libre, al mejorar y proteger las semillas forestales para poder reverdecer su entorno exitosamente.(Dronecoria, 2017)            
            </article>
            <h2 style={{paddingLeft:"10%"}}>Esquemas</h2>
            <div style={{marginTop:30 ,paddingLeft:100}}>   
                <BlackBox></BlackBox>
            </div>
            
        </div>
    );
}

export default solMainPage;