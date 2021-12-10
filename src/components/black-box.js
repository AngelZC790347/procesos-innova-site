import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import{Toast,ToastBody,ToastHeader} from 'reactstrap'
const BlackBox = () =>{
    const cardStyle={
        display:"inline-block",
        border:"solid 0.5px"
    }
    const minLiStyle={
        marginBottom:20,
        listStyle:"doted"
    }
    const lineStyle={
        display:"inline-block",
        border:"solid black",
        minWidth:60
    }
    return(
        <>
            <Toast style={cardStyle}>
                <ToastHeader>Entrada</ToastHeader>
                <ToastBody>
                    <ul>
                        <li style={minLiStyle}>
                            <h6>Energia</h6>
                            <ul>
                                <li>Electrica</li>
                            </ul>
                        </li>
                        <li style={minLiStyle}>
                            <h6>Señales</h6>
                            <ul>
                                <li>Suelos Deforestados</li>
                                <li>Semillas Ordinarias</li>
                            </ul>
                        </li>
                    </ul>
                </ToastBody>
            </Toast>
            <div style={lineStyle}></div>
            <Toast style={cardStyle}>
                <ToastHeader>Caja Negra</ToastHeader>
                <ToastBody>
                    Monitoreo y siembra de semillas con drones
                </ToastBody>
            </Toast>
            <div style={lineStyle}></div>
            <Toast style={cardStyle}>
                <ToastHeader>Salidas</ToastHeader>
                <ToastBody>
                    <ul>
                        <li style={minLiStyle}>
                            <h6>Movimiento</h6>
                            <ul>
                                <li>Monitoreo Automatizado</li>
                            </ul>
                        </li>
                        <li style={minLiStyle}>
                            <h6>Vibraciones</h6>
                            <ul>
                                <li>Corrientes de Vientos</li>
                                <li>Lluvias</li>
                            </ul>
                        </li>
                        <li style={minLiStyle}>
                            <h6>Energia</h6>
                            <ul>
                                <li>Emision de Calor</li>
                                <li>Ruido</li>
                            </ul>
                        </li>
                    </ul>
                </ToastBody>
            </Toast>
        </>
    )
}
export default BlackBox;