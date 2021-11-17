import React from 'react';
const Footer = () => {
    return (
        <footer className="bg-dark text-center text-lg-start fixed-bottom" >
            <div className="container">
                <div className="text-right p-3 text-light d-flex">
                    © 2021 Copyright:
                    <i className="fas fa-globe"></i>
                    <a className="text-light" href="https://giphy.com/">Giphy.com</a>
                </div>
           </div>
        </footer>
    );
}

export default Footer;