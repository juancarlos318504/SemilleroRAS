import React from "react";
import qr from '../Images/CodeQR.png';
import cardboard from '../Images/Cardboard.png';
import './PopupRobot.css';
var QRCode = require('qrcode.react');

const PopupRobot = (props) => {
  const { robotname, description, image, QRinformation, link, close } = props;

  return (
    <div className="o-card-Content">
      <a className="o-close" onClick={close}>&times;</a>
      <div className="o-card-text-content">
        <div className="o-card-title"> {robotname} </div>
        <div className="o-description-content">{description}</div>

        <div className="o-card-download">
          <div className="o-interactive-download">
            <h3>Descarga la guía interactiva</h3>
            <img className="o-cardboar-image" src={cardboard}></img>
          </div>
          <p>Escanea el código QR o presiona el botón descargar</p>
          {/*<img className="o-qr-image" src={qr}></img>*/}
          <div className="o-qr-image">
            <QRCode value={link} size={80} level="L"/>
          </div>
          <a href={link} target="_blank">
            <button className="o-button-card">Descargar</button>
          </a>
        </div>
      </div>
      
      <div className="o-backgroung-card">
        <a className="o-close-2" onClick={close}>&times;</a>
        <div className="o-bg-triangle-5"></div>
        <img className="o-card-image" src={image}></img>      
      </div>
    </div>

  );
};

export default PopupRobot;