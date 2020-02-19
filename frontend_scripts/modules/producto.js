import React from 'react';
import { addSelected } from '../actions/products';
import { removeSelected } from '../actions/products';
import { connect } from 'react-redux';
import { Checkbox } from 'antd';

function Producto(props) {
    return(
        <li>
            <img src={`/uploads/images/${props.producto.image}`} alt={props.producto.descripcion}/>
            <h3>{props.producto.descripcion}</h3>
            <span className="precio">{`$${props.producto.precio}`}</span>
            <Checkbox
                onChange={(e) => e.target.checked ? props.addItemToCart(props.producto.id) : props.removeItemFromCart(props.producto.id)}
            />
        </li>
    )    
}

const mapStateToProps = state => ({ selected: state.selected})
const mapDispatchToProps = dispatch => ({
    addItemToCart: (productId) =>  dispatch(addSelected(productId)),
    removeItemFromCart: (productId) => dispatch(removeSelected(productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Producto);