import React from 'react';
import PropTypes from 'prop-types';

function ItemCarrito({ item }) {
  return (
    <li>
      <img src={`/uploads/images/${item.image}`} alt={item.descripcion} />
      <span className="descripcion">{item.descripcion}</span>
      <span className="precio">{item.precio}</span>
      <i className="fas fa-trash" />
    </li>
  );
}

ItemCarrito.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    descripcion: PropTypes.string,
    image: PropTypes.string,
    precio: PropTypes.number,
  }).isRequired,
};


export default ItemCarrito;
