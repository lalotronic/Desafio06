import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


let token=false;//si token = true...el user ya esta registrado si token=false ...el user no esta registrado


export default function Navbar() {
  const { getQuantity, getTotal } = useContext(CartContext);
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Pizzeria Mamma Mia!
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item me-2">
                < Link  className="btn btn-primary botonHome-btn"
                  to={"/"}>
                  &#x1F355;Home
                </Link>
              </li>
              {/*agregamos boton prfile*/}

              {/* Aquí se muestran los botones según el valor de la variable 'token' */}
              {!token ? (
                <>
                  <li className="nav-item me-2">
                    <Link
                      className="btn btn-primary botonLogin-btn"
                      to={"/login"}>&#x1F510;Login
                    </Link>  
                  </li>

                  <li className="nav-item me-2">
                  <Link
                      className="btn btn-primary botonRegister-btn" 
                      to={"/register"}>&#x1F510;Register
                  </Link>
                  </li>

                  <li className="nav-item me-2">
                <Link
                    className="btn btn-primary botonProfile-btn" 
                    to={"/profile"}>&#x1F510;Profile
                </Link>
                </li>              
              </>         

              
                
              ) : (
                <>
                  <li className="nav-item me-2">
                    <a
                      className="btn btn-primary botonProfile-btn"
                      href="#"
                    >
                      &#x1F513;Profile
                    </a>
                  </li>
                  <li className="nav-item me-5">
                    <a
                      className="btn btn-primary botonLogout-btn"
                      href="#"
                    >
                      &#x1F512;Logout
                    </a>
                  </li>
                </>
              )}
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="botonTotal-btn" to={"/cart"}>
                  &#x1F6D2;Cart: Total: ${getTotal()}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}