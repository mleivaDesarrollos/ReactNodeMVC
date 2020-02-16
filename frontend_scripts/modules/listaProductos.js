import React from 'react';
import axios from 'axios';
import Producto from './producto';


class ListaProductos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productos: []
        }
    }

    seleccionarProducto(producto) {
        // Clonamos el listado total de los productos
        let productos = this.state.productos.slice();        
        // Obtenemos el item en cuestión a modificar
        let idProducto = productos.indexOf(producto);
        // Modificamos el estado de selección del producto
        producto.selected = !producto.selected;
        // Remplazamos el item en el listado de productos
        productos[idProducto] = producto;
        // Cambiamos el estado del componente
        this.setState({
            productos
        })
    }

    componentDidMount() {
        // Preparamos la URL
        let url = `http://${location.host}/productos/lista`;
        // Preparamos los productos a devolver
        let productos;
        // Ejecutamos la petición en axios
        productos = axios.get(url).then(resultado => {
            if(resultado.status == 200) {
                productos = resultado.data
                this.setState({
                    productos
                });
            }
        }).catch(error => {
            // No hacer nada en caso de error
        });
        
    }
    render() {
        return(
            <div className="productos-list">
            <h2>Aquí se encuentran los productos en venta</h2>
                <ul>
                    {
                        
                        this.state.productos.map((value) => {                            
                            return <Producto key={value.id} producto={value} onClickSeleccionar={() => this.props.onAddProduct(value)} />;
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ListaProductos


