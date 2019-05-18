// React Funcional Component - Total - Se encarga de imprimir el total de la cotizacion
// Import components
import React from 'react';
import {resultado} from './Helper';

// import styles
import '../styles/total.css';

export default function Total({cotizacion}) {
  const {marca, año , plan } = cotizacion; 

  if(!marca || !año || !plan )  return null;

  let total = resultado (marca,año,plan);

  return (
    <div className="total">
      <h2 className="mensaje-total"> {`Total cotizacion = $ ${total}`}</h2>
    </div>
  )
}
