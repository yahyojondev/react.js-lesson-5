import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import { Routers } from '../../static/Router'
import headerlogo from '../../assets/images/header.logo.svg'

function Navbar() {
  return (
    <div className="navbar">
        <div className="container">
            <div className="navbar__wrapper">
             <img src={headerlogo} alt="" className="header__logo" />
                <div className="navbar__links">
                    {
                        Routers?.map(el =>(

                            <NavLink className="navbar__link" key={el.id} to={el.path}>{el.title}</NavLink>
                        ))
                    }
      
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar