import React from 'react';
import giphylogo from '../images/giphylogo.png';

const Header = () => {
    return (
        <nav className="navbar bg-dark navbar-dark">
            <div className="container">
                <a href="/" className="navbar-brand">
                    <img src={giphylogo} alt="" width="40" height="40"></img>
                    Mi buscador de GIFS
                </a>
            </div>
        </nav>
    );
}

export default Header;