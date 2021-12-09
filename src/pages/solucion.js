import React from "react";
import LandHead from "../components/landing-head";
import NaviSite from "../components/navigator";

const solMainPage = () => {
    return (
        <div >
            <NaviSite></NaviSite>
            <LandHead tittleH1="Drones" backImg="https://www5.djicdn.com/cms/uploads/fced25c09996cf03c3383eac057ebc45@640*640.jpg"></LandHead>
            <article >
                Dronecoria V.05: Es un proyecto creado por una empresa española, la cual busca desarrollar una tecnología forestal actualizada al siglo XXI, que permita a entidades y empresas poder realizar reforestaciones de bajo coste, alto valor y construir una comunidad en torno a ellas para formar una nueva economía de la restauración ecológica. Además, desarrolla  herramientas y conocimiento biotecnológico de código libre, con el fin de brindar soluciones tecnológicas para siembras directas forestales, desde un drone que carga 10 kg de semillas, hasta una maquina peletizadora de semillas. En esa misma línea,  brinda una investigación de ciencia libre, al mejorar y proteger las semillas forestales para poder reverdecer su entorno exitosamente.(Dronecoria, 2017)            
            </article>
        </div>
    );
}

export default solMainPage;