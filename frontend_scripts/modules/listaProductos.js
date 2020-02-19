import React from 'react';
import axios from 'axios';
import Producto from './producto';
import { connect } from 'react-redux';
import { initializeProducts } from '../actions/products';


class ListaProductos extends React.Component {

    componentDidMount() {
        this.props.inicializar();
    }

    render() {
        return(
            <div className="productos-list">
            <h2>Aquí se encuentran los productos en venta</h2>
                <ul>
                    {                  
                          
                        this.props.productos.map((value) => {         
                            return <Producto key={value.id} producto={value} />;
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({ productos: state.products })
const mapDispatchToProps = (dispatch) => ({
    inicializar: () => dispatch(initializeProducts())
  })

export default connect(mapStateToProps, mapDispatchToProps)(ListaProductos)

