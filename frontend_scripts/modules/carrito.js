import React from 'react';
import ListaProductos from './listaProductos';
import ItemCarrito from './ItemCarrito';
import { connect } from 'react-redux';
import "antd/dist/antd.css";

function Carrito({itemsOnCarrito, productos}) {
        let items;
        if(!!itemsOnCarrito.length) {
            let filtered_items = itemsOnCarrito.map(productId => productos.find(productFromTotal => productFromTotal.id == productId));
            items = filtered_items.map(product => (<ItemCarrito key={product.id} item={product} />))
         } else {
             items = (<li>No hay items en listado</li>)
         }
        return (
            <div className="container">
                <div id="productos">
                    <ListaProductos />
                </div>                
                <div className="carrito">
                    <h3>Carrito de compras</h3>
                    <ul>{ items }</ul>
                    <p className="total">Total: </p>
                    <span className="valor-total"></span>
                    <button className="comprar">Comprar</button>
                </div>
            </div>
        )
}

const mapToProps = state => ({itemsOnCarrito: state.selected, productos: state.products})

export default connect(mapToProps)(Carrito);