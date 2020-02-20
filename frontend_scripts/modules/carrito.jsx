import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListaProductos from './listaProductos';
import ItemCarrito from './ItemCarrito';
import 'antd/dist/antd.css';

function Carrito({ itemsOnCarrito, productos }) {
  let items;
  if (itemsOnCarrito.length) {
    const filteredItems = itemsOnCarrito.map(
      (productId) => productos.find((productFromTotal) => productFromTotal.id === productId),
    );
    items = filteredItems.map((product) => (<ItemCarrito key={product.id} item={product} />));
  } else {
    items = (<li>No hay items en listado</li>);
  }
  return (
    <div className="container">
      <div id="productos">
        <ListaProductos />
      </div>
      <div className="carrito">
        <h3>Carrito de compras</h3>
        <ul>{items}</ul>
        <p className="total">Total: </p>
        <span className="valor-total" />
        <button type="button" className="comprar">Comprar</button>
      </div>
    </div>
  );
}

Carrito.propTypes = {
  itemsOnCarrito: PropTypes.arrayOf(PropTypes.number).isRequired,
  productos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapToProps = (state) => ({ itemsOnCarrito: state.selected, productos: state.products });

export default connect(mapToProps)(Carrito);
