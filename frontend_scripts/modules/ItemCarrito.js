import React from 'react';

function ItemCarrito({item}) {
    return (
        <li>
            <img src={`/uploads/images/${item.image}`} alt={item.descripcion} />
            <span className='descripcion'>{item.descripcion}</span>
            <span className='precio'>{item.precio}</span>
            <i className='fas fa-trash' />
        </li>
    )

}

export default ItemCarrito;