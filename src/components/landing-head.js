import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
const headingStyles = {
    marginTop: "2%",
    paddingLeft: "12%",
    minWidth: 620,
    fontSize:50,
    fontFamiliy:"-apple-system, Roboto, sans-serif, serif",
    textShadows:30,
    color:"#2F2E2E "
}

const LandHead = (props)=>{
    const paragraphStyles = {
        marginBottom:0,
        opacity:1,
        backgroundImage:`url(${props.backImg})`,
        minHeight:450,
        padding:30
    } 
    return(
        <div style={paragraphStyles}>
          <h1 className="h1" style={headingStyles}>{props.tittleH1}</h1>
        </div>
    )
}
export default LandHead;