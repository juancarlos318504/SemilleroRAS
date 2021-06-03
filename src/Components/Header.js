import React from 'react';
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import video from '../Video/videobg.mp4';
import './Header.css';

const Header = (props) => {
    const display = props.display;
    const displayHeader = props.displayHeader;

    return (
        
        <div className="o-content-header">
            <div className="o-video-container">
                <video autoPlay muted loop id="myVideo">
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
            
            <div className="o-header-info">
                <Navbar></Navbar>
                <div style={{ color: displayHeader }}>
                <h1 className="o-title-header">R.A.S</h1>
                <h2 className="o-subtitle3-header">Robotics and Autonomous Systems</h2>
                <h2 className="o-subtitle-header">Semillero de Investigación en Robótica y Sistemas Autónomos</h2>
                <h2 className="o-subtitle2-header">Universidad Autónoma de Occidente</h2>
                </div>
                
                <Link to="/AboutUs">
                    <button className="o-button" style={{ display: display }}>Conócenos más</button>
                </Link>
                
                <div id="o-bg-triangle" className="o-bg-triangle-container" style={{ display: displayHeader }}>
                    <div className="o-bg-triangle-1"></div>
                    <div className="o-bg-triangle-2"></div>
                </div>
            </div>
            
        </div>

    );
};

export default Header;