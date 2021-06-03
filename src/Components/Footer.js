import React from 'react';
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css'

const Footer = () => (

    <div className="o-footer">  
        <div className="o-bg-triangle-container"> 
            <div className="o-bg-triangle-3"></div>
            <div className="o-bg-triangle-4"></div>
        </div>

        <div className="o-content-footer">
            <h1>Nuestro Boletín</h1>
            <p className="o-footer-text">Únete a nuestra lista de correo, No te pierdas ninguna actualización</p>

            <form>
                <input type="text" placeholder="Correo electrónico"/>
                <input type="submit" value="SUSCRIBIRSE" />
            </form>

            <a href="https://www.facebook.com/groups/semilleroRobotica/" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} className="o-social-media"/></a>
            <a href="https://www.instagram.com/robotica_uao/?igshid=12b6x3mfgr7zv" target="_blank"><FontAwesomeIcon icon={faInstagram} className="o-social-media"/></a>
            <p className="o-credit-text">© Derechos de autor reservados  | Diseñado por Juan Carlos Cuasquen y Sebastian Quintero</p> 
        </div>  

    </div>
    );
            
export default Footer;