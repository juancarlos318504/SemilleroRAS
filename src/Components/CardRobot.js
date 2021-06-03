import React, { Component } from 'react';
import PopPop from 'react-poppop';
import PopupRobot from './PopupRobot';
import {popupStyle} from './popupStyle';
import './CardRobot.css';

class CardRobot extends Component {
    
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
        const { robotname, image, description, link } = this.props;

        return (
            <div className="o-robot-card">
                <div className="o-bg-triangle-card-robot">
                    <div className="o-bg-triangle-color"></div>
                </div>
    
                <div  className="o-robot-card-content">
                    <img className="o-image" src={image} />
                    <h3 className="o-robot-name">{robotname}</h3>
                </div>
                <button className="o-button-card" onClick={() => this.toggleShow()}>Ver más</button>

                <PopPop
                    position="centerCenter"
                    open={this.state.show}
                    closeBtn={false}
                    closeOnEsc={true}
                    onClose={() => this.toggleShow()}
                    closeOnOverlay={true}
                    contentStyle={popupStyle}>

                    <PopupRobot robotname={robotname} description={description} image={image} link={link} close={this.toggleShow}/>
                </PopPop>

            </div>
        );
    }    
};

export default CardRobot;