import React from 'react';
import ReactDOM from 'react-dom';

class Inicio extends React.Component {
    render() {
        return(
            <h1>Componente Renderizado por React</h1>
        )
    }
}

const home = document.getElementById('home');
home ? ReactDOM.render(<Inicio/>, home) : false
