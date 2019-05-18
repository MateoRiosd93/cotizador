// React Class Component - Formulario - Ingreso de datos por el usuario 
// Import components 
import React, { Component } from 'react'; 

// Import estilos
import '../styles/formulario.css';

export default class Formulario extends Component {
    state = {
        marca:'',
        año:'',
        plan:''
    }

    handleInput = (evento) => {
        const{value, name } = evento.target;
        this.setState ({
            [name] : value 
        })
    }
    
    saveDate = (evento) =>{
        evento.preventDefault();
        const cotizacion = this.state;
        this.props.addCotizacion(cotizacion);   
    }

  render() {
    return (
        <form className="form" action="">
            <div className="divs">
                <label htmlFor="marca"> Marca </label>
                <select onChange={this.handleInput} className="select" name="marca" >
                    <option >Americano</option>
                    <option >Europeo</option>
                    <option >Asiatico</option>
                </select>
            </div>
            <div className="divs">
                <label htmlFor="marca"> Año </label>
                    <select onChange={this.handleInput} className="select" name="año">
                        <option >2019</option>
                        <option >2018</option>
                        <option >2017</option>
                        <option >2016</option>
                        <option >2015</option>
                        <option >2014</option>
                </select>
            </div>
            <div className="divs">
                <label htmlFor="plan">Plan</label>
                <input onChange={this.handleInput} type="radio" name="plan" value="basico"/> Básico
                <input onChange={this.handleInput} type="radio" name="plan" value="completo"/> Completo
            </div> 
            <div>
                <button onClick={this.saveDate} className="button"> Cotizar </button>
            </div>
        </form>
    )
  }
}
