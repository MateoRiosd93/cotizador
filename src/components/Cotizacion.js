// React Funcional Component - Cotizacion - Se encarga de imprimir la informacion elegida
// Import components 
import React from 'react'
import Total from './Total';

// import styles of component cotizacion
import '../styles/cotizacion.css';

export default function Cotizacion({cotizacion}) {

  const mostrarResumen = () => {
    const {marca,año,plan} = cotizacion;

    if(!marca || !año || !plan )  return null;

    return(
      <div className="sumary">
          <h1 className="sumary-title"> Cotizacion vehiculo </h1>
          <h3 className="text"> {`Marca :  ${marca}` }</h3>
          <h3 className="text"> {`Modelo :  ${año}`} </h3>
          <h3 className="text">{`Plan :  ${plan}`}</h3>
      </div> 
    )
  }

  return(
      <div className="sumary">
          {mostrarResumen()}
          <Total cotizacion={cotizacion}/>
       </div> 
  )
}
