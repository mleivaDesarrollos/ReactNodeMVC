import React from 'react';
import PropTypes from 'prop-types';
import { Spin, Icon } from 'antd';
import { connect } from 'react-redux';
import Producto from './producto';
import { initializeProducts } from '../actions/products';

class ListaProductos extends React.Component {
  componentDidMount() {
    const { props } = this;
    props.inicializar();
  }

  render() {
    const { productos, isLoading } = this.props;
    let element;
    if (isLoading) {
      element = (
        <Spin indicator={(
          <Icon
            type="loading"
            spin
            style={{ fontSize: '24px' }}
          />
        )}
        />
      );
    } else {
      element = (
        <ul>
          { productos.map((product) => <Producto key={product.id} producto={product} />) }
        </ul>
      );
    }
    return (
      <div className="productos-list">
        { element }
      </div>
    );
  }
}

ListaProductos.propTypes = {
  inicializar: PropTypes.func.isRequired,
  productos: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
};


const mapStateToProps = (state) => ({ productos: state.products, isLoading: state.isLoading });
const mapDispatchToProps = (dispatch) => ({
  inicializar: () => dispatch(initializeProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListaProductos);
