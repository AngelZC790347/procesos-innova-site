import React from "react"
const headingStyles = {
    marginTop: "2%",
    paddingLeft: "12%",
    maxWidth: 620,
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
          <h1 style={headingStyles}>{props.tittleH1}</h1>
        </div>
    )
}
export default LandHead;