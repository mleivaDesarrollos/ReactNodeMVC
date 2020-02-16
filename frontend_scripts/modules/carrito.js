import React from 'react';
import ReactDOM from 'react-dom';
import ListaProductos from './listaProductos';


function ItemCarrito(props) {
    console.log(props);
    return(
        <li>
            <img src={`/uploads/images/${props.item.image}`} alt={props.item.descripcion} />
            <span className='descripcion'>{props.item.descripcion}</span>
            <span className='precio'>{props.item.precio}</span>
            <i className='fas fa-trash' />
        </li>
    )

}

class Carrito extends React.Component {
    constructor(props) {
        super(props);
        this.agregarAlCarrito = this.agregarAlCarrito.bind(this);
        this.state = {
            items: []
        }
    }

    agregarAlCarrito(producto){
        // Clonamos los items
        let current_carrito = this.state.items.slice();
        // Cambiamos el estado del producto
        producto.selected = !producto.selected;
        // Validamos si el producto es true
        if(producto.selected === true) {
            current_carrito.push(producto);
        } else {
            // Obtenemos el indice del item
            let indexProducto = current_carrito.indexOf(producto);
            // Removemos el item segun indice
            current_carrito.splice(indexProducto,1);
        }
        // Cambiamos el estado del componente
        this.setState({
            items: current_carrito
        })

              
    }


    render() {
        // Calculamos el total de todos los items
        let total = 0;        
        this.state.items.forEach(item => total += item.precio);
        let items;
        if(this.state.items.length === 0) {
            items = <li>No hay items elegidos</li>
        } else {
            items = this.state.items.map((item) =>                
                <ItemCarrito key={item.id} item={item} />
            );
        }        
        return (
            <div className="container">
                <div id="productos">
                    <ListaProductos onAddProduct={this.agregarAlCarrito} />
                </div>                
                <div className="carrito">
                    <h3>Carrito de compras</h3>
                    <ul>{items}</ul>
                    <p className="total">Total: </p>
                    <span className="valor-total">{`$${total}`}</span>
                    <button className="comprar">Comprar</button>
                </div>
            </div>
        )
    }
}

const carrito = document.querySelector('#root');
carrito && ReactDOM.render(<Carrito />, carrito)