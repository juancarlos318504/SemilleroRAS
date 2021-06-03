import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import logoUAO from '../Images/Logo_UAO.svg';
import logoSIR from '../Images/LogoSIR.svg';
import './Navbar.css';

import PopPop from 'react-poppop';
import {menuStyle} from './popupStyle';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
        show: false
    }

  }

  toggleShow = () => {
      this.setState({show:!this.state.show});
  }

  render(){
 
    return (
      <div className="o-nav-container">

        <div className="logo">
          <Link to="/">
              <div className="o-content-image">
                  <img className="o-logo" src={logoUAO} alt="Universidad Autonoma de Occidente"></img>
                  <img className="o-logo" src={logoSIR}  alt="Semillero de investigación en Robótica"></img>  
              </div>
          </Link>
        </div>

        <input id="menu-toggle" type="checkbox" checked={this.state.show}/> 
        <label className='o-menu-button-container' htmlFor="menu-toggle" onClick={this.toggleShow.bind(this)}>
          <div className='o-menu-button'></div>
        </label>
          
        <ul className="o-menu">
          <NavLink activeClassName="active" exact to="/">
            <li>INICIO</li>
          </NavLink>
          <NavLink activeClassName="active" to="/AboutUs">
            <li>ACERCA DE NOSOTROS</li>
          </NavLink>
          <NavLink activeClassName="active" to="/Projects">
            <li>NUESTROS PROYECTOS</li>
          </NavLink>
          <NavLink activeClassName="active" to="/Gallery">
            <li>GALERIA</li>
          </NavLink>
          <NavLink activeClassName="active" to="/Contact">
            <li>CONTÁCTENOS</li>
          </NavLink>
        </ul>

        <PopPop
          position="centerCenter"
          open={this.state.show}
          closeBtn={false}
          closeOnEsc={false}
          onClose={() => this.toggleShow()}
          closeOnOverlay={false}
          contentStyle={menuStyle}
          class="o-poppop-menu"
          overlayStyle ={{
            backgroundColor: 'rgba(0,0,0,0.6)',
            overflow:'hidden'
          }}>

          <ul className="o-mobile-menu">
            <NavLink activeClassName="active" exact to="/" onClick={this.toggleShow.bind(this)}>
              <li>INICIO</li>
            </NavLink>
            <NavLink activeClassName="active" to="/AboutUs" onClick={this.toggleShow.bind(this)}>
              <li>ACERCA DE NOSOTROS</li>
            </NavLink>
            <NavLink activeClassName="active" to="/Projects" onClick={this.toggleShow.bind(this)}>
              <li>NUESTROS PROYECTOS</li>
            </NavLink>
            <NavLink activeClassName="active" to="/Gallery" onClick={this.toggleShow.bind(this)}>
              <li>GALERIA</li>
            </NavLink>
            <NavLink activeClassName="active" to="/Contact" onClick={this.toggleShow.bind(this)}>
              <li>CONTÁCTENOS</li>
            </NavLink>
          </ul>

        </PopPop>

      </div>
    );
  }
}

export default Navbar;
