import React from 'react';

export default class Producto extends React.Component {
    render(){
        return(
            <li>
                <img src={`/uploads/images/${this.props.producto.image}`} alt={this.props.producto.descripcion}/>
                <h3>{this.props.producto.descripcion}</h3>
                <span className="precio">{`$${this.props.producto.precio}`}</span>
                <i 
                    className={`far fa-check-square select ${this.props.producto.selected ? 'elegido' : ''}`}
                    onClick={this.props.onClickSeleccionar}
                />
            </li>
        )
    }
}