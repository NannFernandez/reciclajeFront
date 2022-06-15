import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        <div>
            <ul className='nav'>
                <a href='#'>Home</a>
                <a href='#'>Iniciar Sesion</a>
                <a href='#'>Servicios</a>
                <a href='#'>Contacto</a>
            </ul>
        </div>
    );
}

export default NavBar;