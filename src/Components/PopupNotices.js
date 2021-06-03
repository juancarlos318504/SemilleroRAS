import React from "react";
import './PopupNotices.css'


const PopupNotices = (props) => {
  const { noticetitle, image, description, date, close } = props;

  return (
    <div className="o-card-Content">
      <a className="o-close" onClick={close}>&times;</a>
      <div className="o-card-text-content-NP">
        <div className="o-card-title"> {noticetitle} </div>
        <div className="o-text-content">
            <p className="o-date-publication">Actualizado: &nbsp; &nbsp; &nbsp;{date}</p> 
            <br /><p className="o-text-description">{description} </p><br />
        </div>
        
      </div>
      <div className="o-backgroung-card">
        <a className="o-close-2" onClick={close}>&times;</a>
        <img className="o-popup-image" src={image}></img>
        <div className="o-bg-triangle-5"></div>
      </div>
    </div>);
};

export default PopupNotices;