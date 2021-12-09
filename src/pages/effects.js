import React from "react";
import ListaFromArray from "../components/list-group";
import NaviSite from "../components/navigator";
//data
const efectos =[
    {
        mainTittle:"Efectos en el ámbito de la salud",
        Items:[
            {
                ItemTittle:"Identificación de efectos",
                Items:["Acorde con la página web SCI DEV NET(2020) señala que la deforestación facilita la transferencia de diversos patógenos de animales silvestres a los seres humanos, dando lugar al resurgimiento y aparición de nuevas enfermedades infecciosas."]
            },{
                ItemTittle:"Medición de los efectos",
                Items:["Apróximadamente en la comunidad de Puerto Nuevo el 50% de la población sufrió en el último año de enfermedades  pulmonares(coronavirus)"]
            },{
                ItemTittle:"Valorización",
                Items:["Equipamiento del hospital regional con una inversión de 5´886,254.40(soles)","Mejora de la gestión institucional con una inversión de 18,310,470(soles)"]
            },{
                ItemTittle:"Comparación con estándares",
                Items:["Acorde con la página web Human Rights Watch(2020) señala que en cada comunidad de Brasil se estima un total de 2.195 hospitalizaciones por enfermedades respiratorias","Colombia ocupa el segundo lugar en número de asesinatos de líderes ambientales(Semana,2021)"]
            }
        ]
    },
    {
        mainTittle:"Efectos en el ámbito de la Economia",
        Items:[
            {
                ItemTittle:"Identificación de efectos",
                Items:["Difícil acceso",
                "Pérdida de venta de frutos",
                 "Disminución de exportaciones legales de tablillos y frisos de madera"]
            },{
                ItemTittle:"Medición de los efectos",
                Items:["Pérdida de ventas de aprox. 200 kg en guanábana y 60 kg en ciruelas ",
                "Solo en el 2008 a 2010 se realizó 112 embarques ilegales de madera de cedro."]
            },{
                ItemTittle:"Valorizacion",
                Items:["S/. 780 pérdidas semanales en frutos",
                "La  pérdida del embarque es del 35% del comercio legal que hay entre Perú y EEUU."]
            },{
                ItemTittle:"Comparación con estándares",
                Items:["La tala ilegal estaría comprometiendo la sostenibilidad de la explotación de los recursos forestales en el largo plazo. Como señalan Pautrat y Lucich (2006)"]
            }
        ]
    },
    {
        mainTittle:"Efectos Ambientales",
        Items:[
            {
                ItemTittle:"Identificación de efectos",
                Items:["Pérdida de bosques",

                "Pérdida de flora y fauna",
                
                "Erosión de suelo y pérdida nutrientes",
                
                "Desertificación(Juste,2021)",
                
                "Pérdida de grandes masas forestales(Juste,2021)"]
            },{
                ItemTittle:"Medición de los efectos",
                Items:["Según el instituto del Bien Común, la comunidad de Puerto Nuevo perdió más de 3000 hectáreas de bosque entre los años 2000 y 2015",

                "En el top 10 de comunidades más deforestadas, Puerto Nuevo ocupa el puesto nro 5"]
            },{
                ItemTittle:"Valorizacion",
                Items:["En gastos apróximadamente S/.34,870,000( distribuido en todo el territorio de Ucayali)"]
            },{
                ItemTittle:"Comparación con estándares",
                Items:["-Acorde con la página Fance24(2021) señala que la cobertura de la amazonía en Brasil perdió 13.235 kilómetros cuadrados, entre agosto 2020 y julio 2021(El primer país en sudamérica con mayor cantidad de territorio perdido)",

                "México ocupa uno de los primeros lugares en tasas de deforestación en el mundo(79 mil hectáreas deforestadas)"]
            }
        ]
    },
]
 
const EffectsPage=()=>{
    return(
        <>
        <NaviSite></NaviSite>
        <ul>
            {
                efectos.map(el=>(
                    <li key={el.mainTittle}>
                        <h2>{el.mainTittle}</h2>
                        {el.Items.map(el2=>(
                            <ListaFromArray ItemTittle={el2.ItemTittle} Items = {el2.Items}></ListaFromArray>
                        ))}
                    </li>
                ))
            }
        </ul>
        </>
        
    )
}
export default EffectsPage;