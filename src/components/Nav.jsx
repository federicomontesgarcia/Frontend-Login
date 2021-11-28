import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {

    const salir=()=>{
        sessionStorage.clear()
        window.location.href='/'
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
            <div className="container">
                <Link className="navbar-brand" to="/">Inicio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/"><i className='fas fa-user'></i> Bienvenido {sessionStorage.getItem('nombre')}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={()=>salir()}><i className='fas fa-user-times'></i>Salir</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/registrar"><i className='fas fa-user-plus'></i>Registrar</Link>
                        </li>
                    </ul> 
                </div>
            </div>
        </nav>
    )
}
