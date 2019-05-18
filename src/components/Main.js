// React Class Component - Main 
// Import Components 
import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Cotizacion from './Cotizacion';

//  Import estilos
import '../styles/main.css';

export default class Main extends Component {
    state = {
        cotizacion : '',
    }

    addCotizacion = (cotizacion) => {
        const newCotizacion = cotizacion;
        this.setState({
            cotizacion : newCotizacion
        })
    }

    render() {
        return (
            <div className="div-body">
                <div className="div-app">
                    <Header title="Cotizaciones App" year={new Date().getFullYear()} />
                    <Formulario addCotizacion={this.addCotizacion}/>
                    <Cotizacion cotizacion={this.state.cotizacion}/>
                </div>
            </div>
        )
    }
}
