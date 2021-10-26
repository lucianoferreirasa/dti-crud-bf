import React from "react";
//import { Link } from 'react-router-dom'

const Header: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">DTI</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link"  href="/">Início</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/produtos">Produtos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;

